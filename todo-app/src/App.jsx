import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6 p-7">
      <div>
        <div>
          <h1 className=" text-3xl font-medium text-center">Recap</h1>
        </div>
        <div className="flex justify-center ">
          <p>coming back after a very very long Time {count} </p>
        </div>
        <div className="flex justify-center gap-2">
          <button className=" bg-blue-700 rounded-2xl p-1">add</button>{" "}
          <button className=" bg-red-600 rounded-2xl p-1">remove</button>
        </div>
      </div>
    </div>
  );
};
export default App;
