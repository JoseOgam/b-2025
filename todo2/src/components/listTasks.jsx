import { useSelector, useDispatch } from "react-redux";
import { clearTask, removeTask } from "../redux/slice/taskSlice";

export const ListTasks = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(removeTask(index));
    console.log("deleted");
  };

  const handleClear = () => {
    dispatch(clearTask());

    console.log("cleared");
  };
  return (
    <div>
      <div>
        <div className="flex justify-end">
          <button
            onClick={handleClear}
            className=" bg-amber-800 rounded-2xl pt-1.5 pl-1.5 pr-1.5"
          >
            clear tasks
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className=" flex justify-between">
                {index + 1}. {task}
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
