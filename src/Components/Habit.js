function Habit(props) {
  const { title, doneStatus } = props;
  return (
    <div className="habit">
      <h3>Title - {title}</h3>
      Status - {doneStatus}
    </div>
  );
}
export default Habit;
