// const { google } = require('googleapis');

// const SPREADSHEET_ID = '1LOnF1l7d6nvzGMfN5FcI6nl2aCZNubInIYfbD9zIfjA';
// const API_KEY = '[ENCRYPTION_KEY]';
// const sheets = google.sheets({ version: 'v4', auth: API_KEY });

// async function fetchAllWorkouts() {
//   try {
//     // 1. Get spreadsheet metadata to find all sheet names
//     const metadata = await sheets.spreadsheets.get({
//       spreadsheetId: SPREADSHEET_ID,
//     });

//     const sheetNames = metadata.data.sheets.map(s => s.properties.title);

//     // 2. Prepare ranges for batchGet (assuming all data starts at A2)
//     const ranges = sheetNames.map(name => `${name}!A2:E50`);

//     // 3. Batch fetch all data in ONE API call
//     const response = await sheets.spreadsheets.values.batchGet({
//       spreadsheetId: SPREADSHEET_ID,
//       ranges: ranges,
//     });

//     // 4. Map the results into your desired format
//     const workouts = response.data.valueRanges.map((valueRange, index) => {
//       const rawTitle = sheetNames[index];
//       const [name, focus] = rawTitle.split('-'); // Splitting name and focus
//       const rows = valueRange.values || [];

//       return {
//         day: name.trim(),
//         focus: focus ? focus.trim() : "",
//         tasks: rows.map(row => ({
//           exercise: row[0] || "",
//           target: row[1] || "",
//           sets: row[2] || "",
//           reps: row[3] || "",
//           weight: row[4] || ""
//         }))
//       };
//     });

//     console.log(JSON.stringify(workouts, null, 2));
//     return workouts;

//   } catch (err) {
//     console.error('Error fetching data:', err.message);
//   }
// }

// const workouts = fetchAllWorkouts();

const workouts = [

  {

    day: "Monday",

    focus: "Abs, push, shoulders, triceps, cardio",

    tasks: [

      { exercise: "Hanging Knee Raises", target: "Lower Abs/Hip Flexors", sets: "3", reps: "12", weight: "Bodyweight" },

      { exercise: "Cable Crunch", target: "Upper Abs", sets: "3", reps: "15", weight: "20-30 kg" },

      { exercise: "Plank", target: "Core", sets: "3", reps: "45 sec", weight: "Bodyweight" },

      { exercise: "Barbell Bench Press", target: "Chest", sets: "4", reps: "8", weight: "35-45 kg" },

      { exercise: "Incline Dumbbell Press", target: "Upper Chest", sets: "3", reps: "10", weight: "12.5-15 kg each" },

      { exercise: "Standing Overhead Press", target: "Front Shoulders", sets: "3", reps: "10", weight: "20-25 kg" },

      { exercise: "Dumbbell Lateral Raise", target: "Side Shoulders", sets: "4", reps: "15", weight: "5-7.5 kg" },

      { exercise: "Cable Chest Fly", target: "Chest", sets: "3", reps: "15", weight: "Light" },

      { exercise: "Rope Tricep Pushdown", target: "Triceps", sets: "3", reps: "12", weight: "20-30 kg" },

      { exercise: "Overhead Rope Extension", target: "Long Head Triceps", sets: "3", reps: "12", weight: "Light" },

      { exercise: "Incline Walk", target: "Cardio/Fat Loss", sets: "20-25 min", reps: "HR 130-145 bpm", weight: "5-6 km/h @ 10-12% incline" }

    ]

  },

  {

    day: "Wednesday",

    focus: "Abs, back, biceps, forearms, cardio",

    tasks: [

      { exercise: "Cable Crunch", target: "Upper Abs", sets: "3", reps: "15", weight: "20-30 kg" },

      { exercise: "Hanging Leg Raise", target: "Lower Abs", sets: "3", reps: "10", weight: "BW" },

      { exercise: "Russian Twist", target: "Obliques", sets: "3", reps: "20", weight: "5 kg plate" },

      { exercise: "Lat Pulldown", target: "Lats", sets: "4", reps: "10", weight: "35-45 kg" },

      { exercise: "Chest Supported Row", target: "Mid Back", sets: "3", reps: "10", weight: "Moderate" },

      { exercise: "Seated Cable Row", target: "Mid Back/Lats", sets: "3", reps: "12", weight: "Moderate" },

      { exercise: "Face Pull", target: "Rear Shoulders/Upper Back", sets: "4", reps: "15", weight: "Light" },

      { exercise: "Dumbbell Shrugs", target: "Traps", sets: "4", reps: "15", weight: "20 kg each" },

      { exercise: "EZ Bar Curl", target: "Biceps", sets: "3", reps: "12", weight: "20 kg" },

      { exercise: "Hammer Curl", target: "Brachialis/Forearms", sets: "3", reps: "12", weight: "10-12.5 kg" },

      { exercise: "Reverse Curl (Forearms)", target: "Forearms", sets: "3", reps: "15", weight: "10-15 kg" },

      { exercise: "Wrist Roller", target: "Forearms", sets: "3", reps: "Until failure", weight: "Moderate" },

      { exercise: "Incline Walk", target: "Cardio/Fat Loss", sets: "20-25 min", reps: "HR 130-145 bpm", weight: "Same" }

    ]

  },

  {

    day: "Friday",

    focus: "Abs, legs, calves, cardio",

    tasks: [

      { exercise: "Decline Sit-up", target: "Upper Abs", sets: "3", reps: "15", weight: "BW" },

      { exercise: "Cable Woodchopper", target: "Obliques", sets: "3", reps: "12/side", weight: "Light" },

      { exercise: "Plank", target: "Core", sets: "3", reps: "60 sec", weight: "BW" },

      { exercise: "Back Squat", target: "Quads/Glutes", sets: "4", reps: "8", weight: "40-50 kg" },

      { exercise: "Romanian Deadlift", target: "Hamstrings/Glutes", sets: "3", reps: "10", weight: "40 kg" },

      { exercise: "Walking Lunges", target: "Quads/Glutes", sets: "3", reps: "20 steps", weight: "10 kg DBs" },

      { exercise: "Leg Press", target: "Quads", sets: "3", reps: "12", weight: "Moderate" },

      { exercise: "Leg Curl", target: "Hamstrings", sets: "3", reps: "15", weight: "Moderate" },

      { exercise: "Standing Calf Raise", target: "Gastrocnemius", sets: "5", reps: "15", weight: "Heavy" },

      { exercise: "Seated Calf Raise", target: "Soleus", sets: "3", reps: "20", weight: "Moderate" },

      { exercise: "Incline Walk", target: "Cardio/Fat Loss", sets: "25 min", reps: "HR 130-145 bpm", weight: "Same" }

    ]

  },

  {

    day: "Forearms",

    focus: "Grip, wrist flexors, wrist extensors",

    tasks: [

      { exercise: "Farmer's Walk", target: "Forearms/Grip/Traps", sets: "3", reps: "40 m", weight: "" },

      { exercise: "Wrist Curl", target: "Forearm Flexors", sets: "3", reps: "20", weight: "" },

      { exercise: "Reverse Wrist Curl", target: "Forearm Extensors", sets: "3", reps: "20", weight: "" },

      { exercise: "Plate Pinch Hold", target: "Grip/Thumb", sets: "3", reps: "30 sec", weight: "" },

      { exercise: "Dead Hang", target: "Grip/Lats/Shoulders", sets: "3", reps: "Max time", weight: "" }

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
  resetDay: document.querySelector("#resetDay")
};

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(state.completed));
}

function taskId(day, index) {
  return `${day}:${index}`;
}

function defaultDay() {
  const today = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());
  return workouts.some((workout) => workout.day === today) ? today : workouts[0].day;
}

function selectedWorkout() {
  return workouts.find((workout) => workout.day === state.selectedDay) || workouts[0];
}

function isDone(day, index) {
  return Boolean(state.completed[taskId(day, index)]);
}

function completedCount(workout) {
  return workout.tasks.filter((_, index) => isDone(workout.day, index)).length;
}

function getTargets(workout) {
  const targets = workout.tasks.flatMap((task) => task.target.split("/"));
  return [...new Set(targets.map((target) => target.trim()).filter(Boolean))].slice(0, 8);
}

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
  elements.muscleStrip.innerHTML = getTargets(workout)
    .map((target) => `<span class="muscle-chip">${target}</span>`)
    .join("");
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
          <div class="stat">
            <span class="stat-label">Sets</span>
            <span class="stat-value">${task.sets}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Reps</span>
            <span class="stat-value">${task.reps}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Weight</span>
            <span class="stat-value">${weight}</span>
          </div>
        </div>
        <div class="task-actions">
          <button class="task-button ${done ? "is-done" : ""}" type="button" data-complete="${index}" aria-pressed="${done}">
            ${done ? checkIcon() : plusIcon()}
            ${label}
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

function render() {
  const workout = selectedWorkout();
  renderTabs();
  renderSummary(workout);
  renderMuscles(workout);
  renderTasks(workout);
  elements.toggleDone.innerHTML = `
    ${state.hideDone ? plusIcon() : checkIcon()}
    ${state.hideDone ? "Show Done" : "Hide Done"}
  `;
}

elements.dayTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-day]");
  if (!tab) return;
  state.selectedDay = tab.dataset.day;
  render();
});

elements.taskList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-complete]");
  if (!button) return;

  const workout = selectedWorkout();
  const index = Number(button.dataset.complete);
  const id = taskId(workout.day, index);

  if (state.completed[id]) {
    delete state.completed[id];
  } else {
    state.completed[id] = new Date().toISOString();
  }

  saveProgress();
  render();
});

elements.toggleDone.addEventListener("click", () => {
  state.hideDone = !state.hideDone;
  render();
});

elements.resetDay.addEventListener("click", () => {
  const workout = selectedWorkout();
  workout.tasks.forEach((_, index) => {
    delete state.completed[taskId(workout.day, index)];
  });
  saveProgress();
  render();
});

render();
