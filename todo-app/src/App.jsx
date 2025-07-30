import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("Jogging");

  const add = () => {
    setTask("running");
  };
  const remove = () => {
    setTask();
  };

  return (
    <div className="flex flex-col items-center gap-6 p-7">
      <div>
        <div>
          <h1 className=" text-3xl font-medium text-center">Recap</h1>
        </div>
        <div className="flex-row justify-center items-center ">
          <input
            placeholder="add task..."
            className=" p-2 rounded-2xl border-b-gray-700 w-full max-w-md text-base"
          />
          <p> task: {task} </p>
        </div>
        <div className="flex justify-center gap-2">
          <button onClick={add} className=" bg-blue-700 rounded-2xl p-1">
            add Task
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
