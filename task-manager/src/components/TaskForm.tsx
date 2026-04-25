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
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="add Task..."
      />
      <button onClick={handleOnsubmit}>Add Task</button>
    </div>
  );
};
export default TaskForm;
