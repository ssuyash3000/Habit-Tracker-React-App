import { useState } from "react";

function Habit(props) {
  const { currHabit, index, habitList, setHabitList } = props;
  const [newStatus, setStatus] = useState(currHabit.status);
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    habitList[index].status = newStatus;
    setHabitList(habitList);
  };
  return (
    <div className="habit">
      <h3>Title - {currHabit.title}</h3>
      Status - {currHabit.status}
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
            checked={newStatus === "No action Taken"}
            onChange={() => handleStatusChange("No action Taken")}
          />
        </div>
      </form>
    </div>
  );
}
export default Habit;
