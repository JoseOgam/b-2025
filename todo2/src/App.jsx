import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux/slice/taskSlice";
import { ListTasks } from "./components/listTasks";

const App = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const add = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput("");
    }
  };
  const remove = () => {};

  return (
    <div className="flex flex-col items-center gap-6 p-7">
      <div>
        <div>
          <h1 className=" text-3xl font-medium text-center">Recap</h1>
        </div>
        <div className="flex-row justify-center items-center ">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="add input..."
            className=" p-2 rounded-2xl border-b-gray-700 w-full max-w-md text-base"
          />
        </div>
        <div className="flex justify-center gap-2">
          <button onClick={add} className=" bg-blue-700 rounded-2xl p-1">
            add Task
          </button>
        </div>
        <div>
          <ListTasks />
        </div>
      </div>
    </div>
  );
};
export default App;
