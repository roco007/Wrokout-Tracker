const workouts = [
  {
    day: "Monday",
    focus: "Abs, push, shoulders, triceps, cardio",
    tasks: [
      { exercise: "Hanging Knee Raises", target: "Lower Abs/Hip Flexors", sets: "3", reps: "12", weight: "Bodyweight", tutorial: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXh4bnJ3ZjN3ejg1NmRwN3RmdWJ5ZzNzejJzejU2Y3VvOXA1dGpvdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9JCkIMm28EjjCML4h1/giphy.gif" },
      { exercise: "Cable Crunch", target: "Upper Abs", sets: "3", reps: "15", weight: "20-30 kg", tutorial: "assets/Cable Crunch.gif" },
      { exercise: "Plank", target: "Core", sets: "3", reps: "45 sec", weight: "Bodyweight", tutorial: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzg3aGZ5MG9udGtvejFweHRyNHIycG0xbmhuMzV3MDU4bTB5b201ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZcteOOkovIh9HaVFjT/giphy.gif" },
      { exercise: "Barbell Bench Press", target: "Chest", sets: "4", reps: "8", weight: "35-45 kg", tutorial: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmRlcjRnaWEzMnlkYndldXp3YjVwMjRlMmY2dzkzZTVnOXU4ZjM0NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7b9b3NkJmADcdpK/giphy.gif" },
      { exercise: "Incline Dumbbell Press", target: "Upper Chest", sets: "3", reps: "10", weight: "12.5-15 kg each", tutorial: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWd1NHF0a2FvN3FncHNyM2J5NjdjZzEyemFiMnZucWI2Y2c4Y3NsciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9yCgVNO31uoiJvPykh/giphy.gif" },
      { exercise: "Standing Overhead Press", target: "Front Shoulders", sets: "3", reps: "10", weight: "20-25 kg", tutorial: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWp3aG41dnJtbnYwZjdidmo5M2R6c2dnZndhbzliMW9ubHZmeDQ0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0IBB1YKqMUCE4Ao/giphy.gif" },
      { exercise: "Dumbbell Lateral Raise", target: "Side Shoulders", sets: "4", reps: "15", weight: "5-7.5 kg", tutorial: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2g5M2h4Mno5dGZ6eHA1a2o5MmJ0eHA5aTNlenE3aHZuZHJremd4aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rmlERmsODCF0l13Sqe/giphy.gif" },
      { exercise: "Cable Chest Fly", target: "Chest", sets: "3", reps: "15", weight: "Light", tutorial: "assets/Cable Chest Fly.gif" },
      { exercise: "Rope Tricep Pushdown", target: "Triceps", sets: "3", reps: "12", weight: "20-30 kg", tutorial: "assets/Rope Tricep Pushdown.gif" },
      { exercise: "Overhead Rope Extension", target: "Long Head Triceps", sets: "3", reps: "12", weight: "Light", tutorial: "assets/Overhead Rope Extension.gif" },
      { exercise: "Incline Walk", target: "Cardio/Fat Loss", sets: "20-25 min", reps: "HR 130-145 bpm", weight: "5-6 km/h @ 10-12% incline", tutorial: "assets/incline walking.gif" }
    ]
  },
  {
    day: "Wednesday",
    focus: "Abs, back, biceps, forearms, cardio",
    tasks: [
      { exercise: "Cable Crunch", target: "Upper Abs", sets: "3", reps: "15", weight: "20-30 kg", tutorial: "assets/Cable Crunch.gif" },
      { exercise: "Hanging Leg Raise", target: "Lower Abs", sets: "3", reps: "10", weight: "BW", tutorial: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExenBoOW0zdzh4bjFhbTIxNmRwNTFuOGt3MXo4Z2Y4M2V6emp6anA5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HAuk68YCmu1bI4N8Km/giphy.gif" },
      { exercise: "Russian Twist", target: "Obliques", sets: "3", reps: "20", weight: "5 kg plate", tutorial: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWs4dXQ4Z3V0bGp6bG5ibG40eHVpbHoxNWlwMDNtdTY0ZzE1a3RyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DfeEVAQlxq2oWfq5f5/giphy.gif" },
      { exercise: "Lat Pulldown", target: "Lats", sets: "4", reps: "10", weight: "35-45 kg", tutorial: "assets/Lat Pulldown.gif" },
      { exercise: "Chest Supported Row", target: "Mid Back", sets: "3", reps: "10", weight: "Moderate", tutorial: "assets/Chest Supported Row.gif" },
      { exercise: "Seated Cable Row", target: "Mid Back/Lats", sets: "3", reps: "12", weight: "Moderate", tutorial: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjFxM3ZxeWs1am1yYnMzZGFmbzJoOTFwcW1kMXV1cHRiN3lmZnZzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/giKmFZqdd3YEuJYIuW/giphy.gif" },
      { exercise: "Face Pull", target: "Rear Shoulders/Upper Back", sets: "4", reps: "15", weight: "Light", tutorial: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXVua2RvZngxcjR4bGI5YTdvem45endxMnpqYjV5ejBqODRudnhsOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RtQGbdJmnbUktIPO9f/giphy.gif" },
      { exercise: "Dumbbell Shrugs", target: "Traps", sets: "4", reps: "15", weight: "20 kg each", tutorial: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnF2NXlnN3VxN2p0dXM4OXBiMTM1cHRwYWludTI1bnEyZXN6Zm5tZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FPG2RjjTFHjNdzzLaC/giphy.gif" },
      { exercise: "EZ Bar Curl", target: "Biceps", sets: "3", reps: "12", weight: "20 kg", tutorial: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWo4enNuNWkydThqdzhvbnViaW9tajd3enozMnY5N21qa201Zm03MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/e2FAiqJcnGgEwjNSJJ/giphy.gif" },
      { exercise: "Hammer Curl", target: "Brachialis/Forearms", sets: "3", reps: "12", weight: "10-12.5 kg", tutorial: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzlvd2p4Nmk4dnRyMHg5MWJ4eHd3bmYydzVoeWt4M3g4a250Mm91MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IgwPXREBJ7pF08yjii/giphy.gif" },
      { exercise: "Reverse Curl (Forearms)", target: "Forearms", sets: "3", reps: "15", weight: "10-15 kg", tutorial: "assets/Reverse Curl.gif" },
      { exercise: "Wrist Roller", target: "Forearms", sets: "3", reps: "Until failure", weight: "Moderate", tutorial: "assets/Wrist_Roller_Strengthening.gif" },
      { exercise: "Incline Walk", target: "Cardio/Fat Loss", sets: "20-25 min", reps: "HR 130-145 bpm", weight: "Same", tutorial: "assets/incline walking.gif" }
    ]
  },
  {
    day: "Friday",
    focus: "Abs, legs, calves, cardio",
    tasks: [
      { exercise: "Decline Sit-up", target: "Upper Abs", sets: "3", reps: "15", weight: "BW", tutorial: "assets/decline situp.gif" },
      { exercise: "Cable Woodchopper", target: "Obliques", sets: "3", reps: "12/side", weight: "Light", tutorial: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXF4c3c3YTlwa2lrMGNldWlzZ2s2NHY0dWFyaWc5dmsybTZmZm1pMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7b9b3NkJmADcdpK/giphy.gif" },
      { exercise: "Plank", target: "Core", sets: "3", reps: "60 sec", weight: "BW", tutorial: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzg3aGZ5MG9udGtvejFweHRyNHIycG0xbmhuMzV3MDU4bTB5b201ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZcteOOkovIh9HaVFjT/giphy.gif" },
      { exercise: "Back Squat", target: "Quads/Glutes", sets: "4", reps: "8", weight: "40-50 kg", tutorial: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm9reTdseXZ2cGJvNmIycTZscWppa3gzbGR0NjI5NGpxcWgwbnRyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SO492RNU3htWaBeVaz/giphy.gif" },
      { exercise: "Romanian Deadlift", target: "Hamstrings/Glutes", sets: "3", reps: "10", weight: "40 kg", tutorial: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDRnd2VnejFremx3YzY5eDFoZHc4d2MwOWtzcDdlNjV2N3JxMXFxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xenc4lKQlhf1Ohi/giphy.gif" },
      { exercise: "Walking Lunges", target: "Quads/Glutes", sets: "3", reps: "20 steps", weight: "10 kg DBs", tutorial: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjV0Mzd5aHhnbjV4MXRpNDJobnlpZWlkcWQ2YTg0azBubDd0dDVkZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBrjcngCsejZ0mA/giphy.gif" },
      { exercise: "Leg Press", target: "Quads", sets: "3", reps: "12", weight: "Moderate", tutorial: "assets/leg press.gif" },
      { exercise: "Leg Curl", target: "Hamstrings", sets: "3", reps: "15", weight: "Moderate", tutorial: "assets/leg curl" },
      { exercise: "Standing Calf Raise", target: "Gastrocnemius", sets: "5", reps: "15", weight: "Heavy", tutorial: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTJzZnhtdHJjNDdvbHNtZ21neGV5dXlnbnVpMHlqcTR1YWkxeDN5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cGBbyHgaOfDfjyl41M/giphy.gif" },
      { exercise: "Seated Calf Raise", target: "Soleus", sets: "3", reps: "20", weight: "Moderate", tutorial: "https://media.giphy.com/media/QGnkbezv5KaptMjqic/giphy.gif" },
      { exercise: "Incline Walk", target: "Cardio/Fat Loss", sets: "25 min", reps: "HR 130-145 bpm", weight: "Same", tutorial: "assets/incline walking.gif" }
    ]
  },
  {
    day: "Forearms",
    focus: "Grip, wrist flexors, wrist extensors",
    tasks: [
      { exercise: "Farmer's Walk", target: "Forearms/Grip/Traps", sets: "3", reps: "40 m", weight: "", tutorial: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDY0bXgwd243MmdhaXR0OWo3ZTVka2NuY3M2YXg2eHBmNjVhOG82YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mxwiYkQRl36NPLLfoL/giphy.gif" },
      { exercise: "Wrist Curl", target: "Forearm Flexors", sets: "3", reps: "20", weight: "", tutorial: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZ0dmh6eWoxZ2l4dHo1eWg3MGVvZm9qYm9wZmk1c2RzYmNub2M3MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LhC8ml64RGFfW/giphy.gif" },
      { exercise: "Reverse Wrist Curl", target: "Forearm Extensors", sets: "3", reps: "20", weight: "", tutorial: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmMyOHFvcGN2OWZhdjdmOTJnb2x4a3FydWNyYWx4aHNsNG10NTA3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zyRa9KUB0W4P6/giphy.gif" },
      { exercise: "Plate Pinch Hold", target: "Grip/Thumb", sets: "3", reps: "30 sec", weight: "", tutorial: "assets/PLATE_PINCH_HOLD.gif" },
      { exercise: "Dead Hang", target: "Grip/Lats/Shoulders", sets: "3", reps: "Max time", weight: "", tutorial: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9oeXRzY200MG0xYmZwMDNvcGZoZ2lhN2JqbDk4OTJtdGVuMHpjNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t6G4bFfrm2buzRLAT9/giphy.gif" }
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
  // Tutorial Modal Elements
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

// Event Listener: Tabs
elements.dayTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-day]");
  if (!tab) return;
  state.selectedDay = tab.dataset.day;
  render();
});

// Event Listener: Tasks (Complete toggle + Modal trigger)
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

// Modal Logic
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