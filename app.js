const monthOptions = Array.from({ length: 12 }, (_, index) => {
  const monthNumber = index + 1;
  return {
    id: `month${monthNumber}`,
    label: `Month ${monthNumber}`,
    file: `workouts/month${monthNumber}.json`
  };
});

const selectedMonthKey = "selected-workout-month-v1";
const legacyMonthOneProgressKey = "month-one-workout-progress-v1";
const defaultMonthId = getStoredMonth();

const state = {
  selectedMonth: defaultMonthId,
  selectedDay: "",
  workouts: [],
  hideDone: false,
  completed: {},
  loading: true,
  error: ""
};

const elements = {
  monthSelect: document.querySelector("#monthSelect"),
  dayTabs: document.querySelector("#dayTabs"),
  taskList: document.querySelector("#taskList"),
  summaryTitle: document.querySelector("#summaryTitle"),
  completedCount: document.querySelector("#completedCount"),
  totalCount: document.querySelector("#totalCount"),
  progressPercent: document.querySelector("#progressPercent"),
  muscleStrip: document.querySelector("#muscleStrip"),
  toggleDone: document.querySelector("#toggleDone"),
  resetDay: document.querySelector("#resetDay"),
  modal: document.querySelector("#tutorialModal"),
  tutorialImg: document.querySelector("#tutorialImg"),
  closeModal: document.querySelector("#closeModal")
};

let loadSequence = 0;

function getStoredMonth() {
  try {
    const storedMonth = localStorage.getItem(selectedMonthKey);
    return monthOptions.some((month) => month.id === storedMonth) ? storedMonth : "month1";
  } catch {
    return "month1";
  }
}

function progressKey(monthId) {
  return `workout-progress-${monthId}-v1`;
}

function readProgress(monthId) {
  try {
    const storedProgress = localStorage.getItem(progressKey(monthId));
    if (storedProgress) return JSON.parse(storedProgress) || {};

    if (monthId === "month1") {
      return JSON.parse(localStorage.getItem(legacyMonthOneProgressKey)) || {};
    }
  } catch {
    return {};
  }

  return {};
}

function saveProgress() {
  try {
    localStorage.setItem(progressKey(state.selectedMonth), JSON.stringify(state.completed));
  } catch {
    // Progress persistence is best-effort; rendering should continue without it.
  }
}

function populateMonthSelect() {
  elements.monthSelect.innerHTML = monthOptions.map((month) => (
    `<option value="${month.id}">${month.label}</option>`
  )).join("");
  elements.monthSelect.value = state.selectedMonth;
}

function currentMonth() {
  return monthOptions.find((month) => month.id === state.selectedMonth) || monthOptions[0];
}

function currentMonthLabel() {
  return currentMonth().label;
}

function taskId(day, index) {
  return `${day}:${index}`;
}

function defaultDay(workouts) {
  const today = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());
  return workouts.some((workout) => workout.day === today) ? today : workouts[0]?.day || "";
}

function chooseSelectedDay(workouts) {
  if (workouts.some((workout) => workout.day === state.selectedDay)) return state.selectedDay;
  return defaultDay(workouts);
}

function selectedWorkout() {
  return state.workouts.find((workout) => workout.day === state.selectedDay) || state.workouts[0];
}

function isDone(day, index) {
  return Boolean(state.completed[taskId(day, index)]);
}

function completedCount(workout) {
  return workout.tasks.filter((_, index) => isDone(workout.day, index)).length;
}

function getTargets(workout) {
  const targets = workout.tasks.flatMap((task) => String(task.target || "").split("/"));
  return [...new Set(targets.map((target) => target.trim()).filter(Boolean))].slice(0, 8);
}

function normalizeWorkouts(data) {
  if (!Array.isArray(data)) {
    throw new Error("Workout file must contain an array.");
  }

  return data.map((workout) => ({
    day: String(workout.day || "Workout"),
    focus: String(workout.focus || "Training"),
    tasks: Array.isArray(workout.tasks) ? workout.tasks.map((task) => ({
      exercise: String(task.exercise || "Exercise"),
      target: String(task.target || "Target"),
      sets: String(task.sets || "-"),
      reps: String(task.reps || "-"),
      weight: String(task.weight || ""),
      tutorial: String(task.tutorial || "")
    })) : []
  }));
}

async function loadMonth(monthId) {
  const month = monthOptions.find((option) => option.id === monthId) || monthOptions[0];
  const sequence = ++loadSequence;

  state.selectedMonth = month.id;
  state.loading = true;
  state.error = "";
  elements.monthSelect.value = month.id;
  render();

  try {
    const response = await fetch(month.file, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Could not load ${month.file}.`);
    }

    const workouts = normalizeWorkouts(await response.json());
    if (sequence !== loadSequence) return;

    state.workouts = workouts;
    state.selectedDay = chooseSelectedDay(workouts);
    state.completed = readProgress(month.id);
    state.loading = false;
    try {
      localStorage.setItem(selectedMonthKey, month.id);
    } catch {
      // Remembering the selected month is best-effort.
    }
    document.title = `${month.label} Workout Tracker`;
    render();
  } catch (error) {
    if (sequence !== loadSequence) return;

    state.workouts = [];
    state.selectedDay = "";
    state.completed = {};
    state.loading = false;
    state.error = error.message || `Unable to load ${month.label}.`;
    render();
  }
}

elements.monthSelect.addEventListener("change", (event) => {
  loadMonth(event.target.value);
});

elements.dayTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-day]");
  if (!tab || state.loading) return;
  state.selectedDay = tab.dataset.day;
  render();
});

elements.taskList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-complete]");
  if (button) {
    const workout = selectedWorkout();
    if (!workout) return;

    const index = Number(button.dataset.complete);
    const id = taskId(workout.day, index);
    if (state.completed[id]) {
      delete state.completed[id];
    } else {
      state.completed[id] = new Date().toISOString();
    }
    saveProgress();
    render();
    return;
  }

  const card = event.target.closest(".task-card");
  if (card) {
    const workout = selectedWorkout();
    if (!workout) return;

    const index = Number(card.dataset.index);
    const task = workout.tasks[index];
    if (task?.tutorial) {
      elements.tutorialImg.src = task.tutorial;
      elements.modal.style.display = "flex";
    }
  }
});

elements.closeModal.addEventListener("click", () => {
  elements.modal.style.display = "none";
  elements.tutorialImg.src = "";
});

elements.modal.addEventListener("click", (event) => {
  if (event.target === elements.modal) {
    elements.modal.style.display = "none";
    elements.tutorialImg.src = "";
  }
});

elements.toggleDone.addEventListener("click", () => {
  state.hideDone = !state.hideDone;
  render();
});

elements.resetDay.addEventListener("click", () => {
  const workout = selectedWorkout();
  if (!workout) return;

  workout.tasks.forEach((_, index) => {
    delete state.completed[taskId(workout.day, index)];
  });
  saveProgress();
  render();
});

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setProgress(done, total) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  elements.completedCount.textContent = String(done);
  elements.totalCount.textContent = String(total);
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressPercent.parentElement.style.setProperty("--value", percent);
}

function renderTabs() {
  elements.dayTabs.innerHTML = state.workouts.map((workout) => {
    const done = completedCount(workout);
    const percent = workout.tasks.length === 0 ? 0 : Math.round((done / workout.tasks.length) * 100);
    const selected = workout.day === state.selectedDay;
    return `
      <button class="day-tab" type="button" role="tab" aria-selected="${selected}" data-day="${escapeHtml(workout.day)}" style="--tab-progress: ${percent}%">
        <span class="day-tab-top">
          <span class="day-tab-name">${escapeHtml(workout.day)}</span>
          <span class="day-tab-count">${done}/${workout.tasks.length}</span>
        </span>
        <span class="tab-progress" aria-hidden="true"><span></span></span>
      </button>
    `;
  }).join("");
}

function renderSummary(workout) {
  const done = completedCount(workout);
  const total = workout.tasks.length;
  elements.summaryTitle.textContent = `${workout.day}: ${workout.focus}`;
  setProgress(done, total);
}

function renderMuscles(workout) {
  elements.muscleStrip.innerHTML = getTargets(workout).map((target) => (
    `<span class="muscle-chip">${escapeHtml(target)}</span>`
  )).join("");
}

function renderTasks(workout) {
  if (workout.tasks.length === 0) {
    elements.taskList.innerHTML = `<article class="task-card placeholder-card">No exercises found for this day.</article>`;
    return;
  }

  elements.taskList.innerHTML = workout.tasks.map((task, index) => {
    const done = isDone(workout.day, index);
    const hidden = done && state.hideDone;
    const label = done ? "Done" : "To Do";
    const weight = task.weight || "Not listed";
    return `
      <article class="task-card ${done ? "is-done" : ""} ${hidden ? "is-hidden" : ""}" data-index="${index}">
        <div class="task-head">
          <div>
            <h3 class="task-title">${escapeHtml(task.exercise)}</h3>
            <p class="target">${escapeHtml(task.target)}</p>
          </div>
          <span class="order-badge">${index + 1}</span>
        </div>
        <div class="task-stats">
          <div class="stat"><span class="stat-label">Sets</span><span class="stat-value">${escapeHtml(task.sets)}</span></div>
          <div class="stat"><span class="stat-label">Reps</span><span class="stat-value">${escapeHtml(task.reps)}</span></div>
          <div class="stat"><span class="stat-label">Weight</span><span class="stat-value">${escapeHtml(weight)}</span></div>
        </div>
        <div class="task-actions">
          <button class="task-button ${done ? "is-done" : ""}" type="button" data-complete="${index}" aria-pressed="${done}">
            ${done ? checkIcon() : plusIcon()} ${label}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function checkIcon() {
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>`;
}

function plusIcon() {
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>`;
}

function renderLoading() {
  elements.summaryTitle.textContent = `Loading ${currentMonthLabel()}...`;
  setProgress(0, 0);
  elements.dayTabs.innerHTML = "";
  elements.muscleStrip.innerHTML = "";
  elements.taskList.innerHTML = `<article class="task-card placeholder-card">Loading workouts...</article>`;
}

function renderError() {
  elements.summaryTitle.textContent = `Unable to load ${currentMonthLabel()}`;
  setProgress(0, 0);
  elements.dayTabs.innerHTML = "";
  elements.muscleStrip.innerHTML = "";
  elements.taskList.innerHTML = `<article class="task-card placeholder-card">${escapeHtml(state.error)}</article>`;
}

function renderEmpty() {
  elements.summaryTitle.textContent = `No workouts found for ${currentMonthLabel()}`;
  setProgress(0, 0);
  elements.dayTabs.innerHTML = "";
  elements.muscleStrip.innerHTML = "";
  elements.taskList.innerHTML = `<article class="task-card placeholder-card">No workouts found.</article>`;
}

function render() {
  elements.monthSelect.value = state.selectedMonth;
  elements.resetDay.disabled = state.loading || Boolean(state.error) || state.workouts.length === 0;
  elements.toggleDone.disabled = state.loading || Boolean(state.error) || state.workouts.length === 0;
  elements.toggleDone.innerHTML = `${state.hideDone ? plusIcon() : checkIcon()} ${state.hideDone ? "Show Done" : "Hide Done"}`;

  if (state.loading) {
    renderLoading();
    return;
  }

  if (state.error) {
    renderError();
    return;
  }

  const workout = selectedWorkout();
  if (!workout) {
    renderEmpty();
    return;
  }

  renderTabs();
  renderSummary(workout);
  renderMuscles(workout);
  renderTasks(workout);
}

populateMonthSelect();
loadMonth(state.selectedMonth);
