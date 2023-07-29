import "../Styles/TrackHabit.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function TrackHabit(props) {
  let { habitList } = props;
  // let newStatus = "";
  let dayArray = [];
  for (let i = 0; i < 7; i++) dayArray.push(i);
  const handleStatusChange = (newAction, index, day) => {
    habitList[index].Days[day] = newAction;
    const habits = firebase.firestore().collection("Habits");
    let HabitList = [...habitList];

    const arrayRef = habits.doc("v27GQa68JwIYH8gQrjV3");

    arrayRef.update({ HabitList }).then(() => {
      console.log("Inc Updation Success");
    });
  };

  return (
    <div className="track-ctn">
      {habitList.map((habit, index) => {
        return (
          <div className="track-habit" key={index}>
            <h1> Habit - {habit.title} </h1>
            {dayArray.map((day) => {
              let action = "No Action Taken";
              if (habit.Days[day] !== undefined) action = habit.Days[day];
              return (
                <div className="track-list" key={day}>
                  <div id="day-ctn">
                    Day - {day} {action}
                  </div>
                  <form className="action-ctn">
                    <div className="action">
                      <label htmlFor={`done-${index}`}>Done</label>
                      <input
                        id={`done-${index}`}
                        type="checkbox"
                        checked={action === "Done"}
                        onChange={() => handleStatusChange("Done", index, day)}
                      />
                    </div>
                    <div className="action">
                      <label htmlFor={`not-done-${index}`}>Not Done</label>
                      <input
                        id={`not-done-${index}`}
                        type="checkbox"
                        checked={action === "Not Done"}
                        onChange={() =>
                          handleStatusChange("Not Done", index, day)
                        }
                      />
                    </div>
                    <div className="action">
                      <label htmlFor={`no-action-${index}`}>
                        No Action Taken
                      </label>
                      <input
                        id={`no-action-${index}`}
                        type="checkbox"
                        checked={action === "No Action Taken"}
                        onChange={() =>
                          handleStatusChange("No Action Taken", index, day)
                        }
                      />
                    </div>
                  </form>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default TrackHabit;
