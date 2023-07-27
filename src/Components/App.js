import { Routes, Route } from "react-router-dom";
import "../Styles/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Createhabit from "./Createhabit";
import TrackHabit from "./TrackHabit";
import { useState } from "react";

function App() {
  let [habitList, setHabitList] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home habitList={habitList} setHabitList={setHabitList} />}
        />
        <Route
          path="/create-habit"
          element={
            <Createhabit habitList={habitList} setHabitList={setHabitList} />
          }
        />
        <Route
          path="/track-habit"
          element={
            <TrackHabit habitList={habitList} setHabitList={setHabitList} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
