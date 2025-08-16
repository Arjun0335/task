import React, { useState } from "react";
import tasks from "./tasks";

function App() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📅 Task Tracker</h1>
      <p>Select a date to see your tasks:</p>

      <input
        type="date"
        onChange={handleDateChange}
        min="2025-08-18"
        max="2025-09-18"
      />

      {selectedDate && (
        <div style={{ marginTop: "20px" }}>
          <h2>Tasks for {selectedDate}</h2>
          <ul>
            {tasks[selectedDate] ? (
              tasks[selectedDate].map((task, idx) => <li key={idx}>{task}</li>)
            ) : (
              <p>No tasks for this date 🎉</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
