import { Routes, Route } from "react-router-dom";
import "../Styles/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Createhabit from "./Createhabit";
import TrackHabit from "./TrackHabit";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function App() {
  let [habitList, setHabitList] = useState([]);
  const ifDayisOne = () => {
    let day = new Date().getDay();
    if (day === 1) {
      firebase
        .firestore()
        .collection("Habits")
        .get()
        .then((snapshot) => {
          let HabitList = snapshot.docs[0].data().HabitList;

          HabitList.forEach((element) => {
            for (let i = 0; i <= 6; i++) element.Days[i] = "No Action Taken";
          });

          // console.log(HabitList);

          const habits = firebase.firestore().collection("Habits");

          const arrayRef = habits.doc("v27GQa68JwIYH8gQrjV3");

          arrayRef.update({ HabitList }).then(() => {
            console.log("Inc Updation Success");
          });
        });
    }
  };
  ifDayisOne();
  useEffect(() => {
    const fetchHabitList = () => {
      firebase
        .firestore()
        .collection("Habits")
        .onSnapshot((snapshot) => {
          let newHabitList = snapshot.docs.map((document) => {
            let onlyHabitList = document.data().HabitList;

            let newHabitList = onlyHabitList.map((habit) => {
              return {
                title: habit.title,

                Days: habit.Days,
              };
            });
            return newHabitList;
          });

          setHabitList(newHabitList[0]);
        });
    };
    fetchHabitList();
  }, []);
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
