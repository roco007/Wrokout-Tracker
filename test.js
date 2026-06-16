const { google } = require('googleapis');

const SPREADSHEET_ID = '1LOnF1l7d6nvzGMfN5FcI6nl2aCZNubInIYfbD9zIfjA';
const API_KEY = 'AIzaSyBMG8MCWuJYPDvoNc7i - ql8qYlFw_ - wwjk';
const sheets = google.sheets({ version: 'v4', auth: API_KEY });

async function fetchAllWorkouts() {
    try {
        // 1. Get spreadsheet metadata to find all sheet names
        const metadata = await sheets.spreadsheets.get({
            spreadsheetId: SPREADSHEET_ID,
        });

        const sheetNames = metadata.data.sheets.map(s => s.properties.title);

        // 2. Prepare ranges for batchGet (assuming all data starts at A2)
        const ranges = sheetNames.map(name => `${name}!A2:E50`);

        // 3. Batch fetch all data in ONE API call
        const response = await sheets.spreadsheets.values.batchGet({
            spreadsheetId: SPREADSHEET_ID,
            ranges: ranges,
        });

        // 4. Map the results into your desired format
        const workouts = response.data.valueRanges.map((valueRange, index) => {
            const rawTitle = sheetNames[index];
            const [name, focus] = rawTitle.split('-'); // Splitting name and focus
            const rows = valueRange.values || [];

            return {
                day: name.trim(),
                focus: focus ? focus.trim() : "",
                tasks: rows.map(row => ({
                    exercise: row[0] || "",
                    target: row[1] || "",
                    sets: row[2] || "",
                    reps: row[3] || "",
                    weight: row[4] || ""
                }))
            };
        });

        console.log(JSON.stringify(workouts, null, 2));
        return workouts;

    } catch (err) {
        console.error('Error fetching data:', err.message);
    }
}

fetchAllWorkouts();