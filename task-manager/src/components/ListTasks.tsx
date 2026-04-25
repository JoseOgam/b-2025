import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const ListTasks = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  console.log(tasks);
  return (
    <div>
      <h2>List Tasks</h2>
      {tasks.map((task: any) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTasks;
