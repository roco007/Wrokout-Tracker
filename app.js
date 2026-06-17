const workouts = [
  {
    day: "Monday",
    focus: "Abs, push, shoulders, triceps, cardio",
    tasks: [
      { exercise: "Hanging Knee Raises", target: "Lower Abs/Hip Flexors", sets: "3", reps: "12", weight: "Bodyweight", tutorial: "assets/Hanging Knee Raises.webm" },
      { exercise: "Cable Crunch", target: "Upper Abs", sets: "3", reps: "15", weight: "20-30 kg", tutorial: "assets/Cable Crunch.webm" },
      { exercise: "Plank", target: "Core", sets: "3", reps: "45 sec", weight: "Bodyweight", tutorial: "assets/Plank.webm" },
      { exercise: "Barbell Bench Press", target: "Chest", sets: "4", reps: "8", weight: "35-45 kg", tutorial: "assets/Barbell Bench Press.webm" },
      { exercise: "Incline Dumbbell Press", target: "Upper Chest", sets: "3", reps: "10", weight: "12.5-15 kg each", tutorial: "assets/Incline Dumbbell Press.webm" },
      { exercise: "Standing Overhead Press", target: "Front Shoulders", sets: "3", reps: "10", weight: "20-25 kg", tutorial: "assets/Standing Overhead Press.webm" },
      { exercise: "Dumbbell Lateral Raise", target: "Side Shoulders", sets: "4", reps: "15", weight: "5-7.5 kg", tutorial: "assets/Dumbbell Lateral Raise.webm" },
      { exercise: "Cable Chest Fly", target: "Chest", sets: "3", reps: "15", weight: "Light", tutorial: "assets/Cable Chest Fly.webm" },
      { exercise: "Rope Tricep Pushdown", target: "Triceps", sets: "3", reps: "12", weight: "20-30 kg", tutorial: "assets/Rope Tricep Pushdown.webm" },
      { exercise: "Overhead Rope Extension", target: "Long Head Triceps", sets: "3", reps: "12", weight: "Light", tutorial: "assets/Overhead Rope Extension.webm" },
      { exercise: "Incline Walk", target: "Cardio/Fat Loss", sets: "20-25 min", reps: "HR 130-145 bpm", weight: "5-6 km/h @ 10-12% incline", tutorial: "assets/incline walking.webm" }
    ]
  },
  {
    day: "Wednesday",
    focus: "Abs, back, biceps, forearms, cardio",
    tasks: [
      { exercise: "Cable Crunch", target: "Upper Abs", sets: "3", reps: "15", weight: "20-30 kg", tutorial: "assets/Cable Crunch.webm" },
      { exercise: "Hanging Leg Raise", target: "Lower Abs", sets: "3", reps: "10", weight: "BW", tutorial: "assets/Hanging Leg Raise.webm" },
      { exercise: "Russian Twist", target: "Obliques", sets: "3", reps: "20", weight: "5 kg plate", tutorial: "assets/Russian Twist.webm" },
      { exercise: "Lat Pulldown", target: "Lats", sets: "4", reps: "10", weight: "35-45 kg", tutorial: "assets/Lat Pulldown.webm" },
      { exercise: "Chest Supported Row", target: "Mid Back", sets: "3", reps: "10", weight: "Moderate", tutorial: "assets/Chest Supported Row.webm" },
      { exercise: "Seated Cable Row", target: "Mid Back/Lats", sets: "3", reps: "12", weight: "Moderate", tutorial: "assets/Seated Cable Row.webm" },
      { exercise: "Face Pull", target: "Rear Shoulders/Upper Back", sets: "4", reps: "15", weight: "Light", tutorial: "assets/Face Pull.webm" },
      { exercise: "Dumbbell Shrugs", target: "Traps", sets: "4", reps: "15", weight: "20 kg each", tutorial: "assets/Dumbbell Shrugs.webm" },
      { exercise: "EZ Bar Curl", target: "Biceps", sets: "3", reps: "12", weight: "20 kg", tutorial: "assets/EZ Bar Curl.webm" },
      { exercise: "Hammer Curl", target: "Brachialis/Forearms", sets: "3", reps: "12", weight: "10-12.5 kg", tutorial: "assets/Hammer Curl.webm" },
      { exercise: "Reverse Curl (Forearms)", target: "Forearms", sets: "3", reps: "15", weight: "10-15 kg", tutorial: "assets/Reverse Curl.webm" },
      { exercise: "Wrist Roller", target: "Forearms", sets: "3", reps: "Until failure", weight: "Moderate", tutorial: "assets/Wrist_Roller_Strengthening.webm" },
      { exercise: "Incline Walk", target: "Cardio/Fat Loss", sets: "20-25 min", reps: "HR 130-145 bpm", weight: "Same", tutorial: "assets/incline walking.webm" }
    ]
  },
  {
    day: "Friday",
    focus: "Abs, legs, calves, cardio",
    tasks: [
      { exercise: "Decline Sit-up", target: "Upper Abs", sets: "3", reps: "15", weight: "BW", tutorial: "assets/decline situp.webm" },
      { exercise: "Cable Woodchopper", target: "Obliques", sets: "3", reps: "12/side", weight: "Light", tutorial: "assets/Cable Woodchopper.webm" },
      { exercise: "Plank", target: "Core", sets: "3", reps: "60 sec", weight: "BW", tutorial: "assets/Plank.webm" },
      { exercise: "Back Squat", target: "Quads/Glutes", sets: "4", reps: "8", weight: "40-50 kg", tutorial: "assets/Back Squat.webm" },
      { exercise: "Romanian Deadlift", target: "Hamstrings/Glutes", sets: "3", reps: "10", weight: "40 kg", tutorial: "assets/Romanian Deadlift.webm" },
      { exercise: "Walking Lunges", target: "Quads/Glutes", sets: "3", reps: "20 steps", weight: "10 kg DBs", tutorial: "assets/Walking Lunges.webm" },
      { exercise: "Leg Press", target: "Quads", sets: "3", reps: "12", weight: "Moderate", tutorial: "assets/leg press.webm" },
      { exercise: "Leg Curl", target: "Hamstrings", sets: "3", reps: "15", weight: "Moderate", tutorial: "assets/leg curl.webm" },
      { exercise: "Standing Calf Raise", target: "Gastrocnemius", sets: "5", reps: "15", weight: "Heavy", tutorial: "assets/Standing Calf Raise.webm" },
      { exercise: "Seated Calf Raise", target: "Soleus", sets: "3", reps: "20", weight: "Moderate", tutorial: "assets/Seated Calf Raise.webm" },
      { exercise: "Incline Walk", target: "Cardio/Fat Loss", sets: "25 min", reps: "HR 130-145 bpm", weight: "Same", tutorial: "assets/incline walking.webm" }
    ]
  },
  {
    day: "Forearms",
    focus: "Grip, wrist flexors, wrist extensors",
    tasks: [
      { exercise: "Farmer's Walk", target: "Forearms/Grip/Traps", sets: "3", reps: "40 m", weight: "", tutorial: "assets/Farmer's Walk.webm" },
      { exercise: "Wrist Curl", target: "Forearm Flexors", sets: "3", reps: "20", weight: "", tutorial: "assets/Wrist Curl.webm" },
      { exercise: "Reverse Wrist Curl", target: "Forearm Extensors", sets: "3", reps: "20", weight: "", tutorial: "assets/Reverse Wrist Curl.webm" },
      { exercise: "Plate Pinch Hold", target: "Grip/Thumb", sets: "3", reps: "30 sec", weight: "", tutorial: "assets/PLATE_PINCH_HOLD.webm" },
      { exercise: "Dead Hang", target: "Grip/Lats/Shoulders", sets: "3", reps: "Max time", weight: "", tutorial: "assets/Dead Hang.webm" }
    ]
  }
];

const storageKey = "month-one-workout-progress-v1";
const state = {
  selectedDay: defaultDay(),
  hideDone: false,
  completed: readProgress()
};

const elements = {
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

function readProgress() {
  try { return JSON.parse(localStorage.getItem(storageKey)) || {}; }
  catch { return {}; }
}

function saveProgress() { localStorage.setItem(storageKey, JSON.stringify(state.completed)); }
function taskId(day, index) { return `${day}:${index}`; }
function defaultDay() {
  const today = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());
  return workouts.some((workout) => workout.day === today) ? today : workouts[0].day;
}
function selectedWorkout() { return workouts.find((workout) => workout.day === state.selectedDay) || workouts[0]; }
function isDone(day, index) { return Boolean(state.completed[taskId(day, index)]); }
function completedCount(workout) { return workout.tasks.filter((_, index) => isDone(workout.day, index)).length; }
function getTargets(workout) {
  const targets = workout.tasks.flatMap((task) => task.target.split("/"));
  return [...new Set(targets.map((target) => target.trim()).filter(Boolean))].slice(0, 8);
}

elements.dayTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-day]");
  if (!tab) return;
  state.selectedDay = tab.dataset.day;
  render();
});

elements.taskList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-complete]");
  if (button) {
    const workout = selectedWorkout();
    const index = Number(button.dataset.complete);
    const id = taskId(workout.day, index);
    if (state.completed[id]) { delete state.completed[id]; } else { state.completed[id] = new Date().toISOString(); }
    saveProgress();
    render();
    return;
  }

  const card = event.target.closest(".task-card");
  if (card) {
    const index = Number(card.dataset.index);
    const task = selectedWorkout().tasks[index];
    if (task.tutorial) {
      elements.tutorialImg.src = task.tutorial;
      elements.modal.style.display = "flex";
    }
  }
});

elements.closeModal.addEventListener("click", () => {
  elements.modal.style.display = "none";
  elements.tutorialImg.src = "";
});

elements.modal.addEventListener("click", (e) => {
  if (e.target === elements.modal) {
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
  workout.tasks.forEach((_, index) => { delete state.completed[taskId(workout.day, index)]; });
  saveProgress();
  render();
});

function renderTabs() {
  elements.dayTabs.innerHTML = workouts.map((workout) => {
    const done = completedCount(workout);
    const percent = Math.round((done / workout.tasks.length) * 100);
    const selected = workout.day === state.selectedDay;
    return `
      <button class="day-tab" type="button" role="tab" aria-selected="${selected}" data-day="${workout.day}" style="--tab-progress: ${percent}%">
        <span class="day-tab-top">
          <span class="day-tab-name">${workout.day}</span>
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
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  elements.summaryTitle.textContent = `${workout.day}: ${workout.focus}`;
  elements.completedCount.textContent = String(done);
  elements.totalCount.textContent = String(total);
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressPercent.parentElement.style.setProperty("--value", percent);
}

function renderMuscles(workout) {
  elements.muscleStrip.innerHTML = getTargets(workout).map((target) => `<span class="muscle-chip">${target}</span>`).join("");
}

function renderTasks(workout) {
  elements.taskList.innerHTML = workout.tasks.map((task, index) => {
    const done = isDone(workout.day, index);
    const hidden = done && state.hideDone;
    const label = done ? "Done" : "To Do";
    const weight = task.weight || "Not listed";
    return `
      <article class="task-card ${done ? "is-done" : ""} ${hidden ? "is-hidden" : ""}" data-index="${index}">
        <div class="task-head">
          <div>
            <h3 class="task-title">${task.exercise}</h3>
            <p class="target">${task.target}</p>
          </div>
          <span class="order-badge">${index + 1}</span>
        </div>
        <div class="task-stats">
          <div class="stat"><span class="stat-label">Sets</span><span class="stat-value">${task.sets}</span></div>
          <div class="stat"><span class="stat-label">Reps</span><span class="stat-value">${task.reps}</span></div>
          <div class="stat"><span class="stat-label">Weight</span><span class="stat-value">${weight}</span></div>
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

function checkIcon() { return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>`; }
function plusIcon() { return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>`; }

function render() {
  const workout = selectedWorkout();
  renderTabs();
  renderSummary(workout);
  renderMuscles(workout);
  renderTasks(workout);
  elements.toggleDone.innerHTML = `${state.hideDone ? plusIcon() : checkIcon()} ${state.hideDone ? "Show Done" : "Hide Done"}`;
}

render();