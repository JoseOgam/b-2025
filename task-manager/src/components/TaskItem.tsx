import { useDispatch } from "react-redux";
import { deleteTask, toggleTask, type Task } from "../services/features/slice";

const TaskItem = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between gap-x-6  p-2 border-b">
      <span className={task.completed ? "line-through" : "none"}>
        {task.title}
      </span>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(toggleTask(task.id))}
      >
        Toggle
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(deleteTask(task.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
