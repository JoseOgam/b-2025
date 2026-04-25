import { useDispatch } from "react-redux";
import { deleteTask, toggleTask, type Task } from "../services/features/slice";

const TaskItem = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{task.title}</span>
      <button onClick={() => dispatch(toggleTask(task.id))}>Toggle</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;
