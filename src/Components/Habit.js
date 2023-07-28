import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
function Habit(props) {
  let date = new Date();
  const { currHabit, index, habitList, setHabitList } = props;
  let initialStatus = currHabit.Days[date.getDay()]
    ? currHabit.Days[date.getDay()]
    : "No Action Taken";
  const [newStatus, setStatus] = useState(initialStatus);
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    habitList[index].Days[date.getDay()] = newStatus;
    const habits = firebase.firestore().collection("Habits");
    let HabitList = [...habitList];

    const arrayRef = habits.doc("v27GQa68JwIYH8gQrjV3");

    arrayRef.update({ HabitList }).then(() => {
      console.log("Inc Updation Success");
    });
    setHabitList(habitList);
    // const trackList = firebase.firestore().collection("Track-habit");
    // let Date = `${date.getDate()}, ${months[date.getMonth()]}`;
    // let ref = null;
    // trackList.where("Date", "==", Date).onSnapshot((snapshot) => {
    //   ref = snapshot.docs[0].id;
    //   // console.log(Date);
    //   // snapshot.docs.
    // });
  };
  // console.log(currHabit.Days);
  return (
    <div className="habit">
      <h3>Title - {currHabit.title}</h3>
      Status - {currHabit.Days[new Date().getDay()] || "No Action Taken"}
      <form className="action-ctn">
        <div className="action">
          <label htmlFor={`done-${index}`}>Done</label>
          <input
            id={`done-${index}`}
            type="checkbox"
            checked={newStatus === "Done"}
            onChange={() => handleStatusChange("Done")}
          />
        </div>
        <div className="action">
          <label htmlFor={`not-done-${index}`}>Not Done</label>
          <input
            id={`not-done-${index}`}
            type="checkbox"
            checked={newStatus === "Not Done"}
            onChange={() => handleStatusChange("Not Done")}
          />
        </div>
        <div className="action">
          <label htmlFor={`no-action-${index}`}>No Action Taken</label>
          <input
            id={`no-action-${index}`}
            type="checkbox"
            checked={newStatus === "No Action Taken"}
            onChange={() => handleStatusChange("No Action Taken")}
          />
        </div>
      </form>
    </div>
  );
}
export default Habit;
