import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../services/features/slice";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleOnsubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;
    dispatch(addTask(title));
    setTitle("");
    console.log(title);
  };
  return (
    <div className="flex gap-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="add Task..."
        className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 "
      />
      <button
        onClick={handleOnsubmit}
        className=" bg-green-900 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
};
export default TaskForm;
