import { useState } from "react";
import CustomButton from "./components/CustomButton";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((count) => count + 1);
  };
  const subtract = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center bg-amber-100">
        <div> {count} </div>
        <div className="flex flex-row space-x-3">
          <div>
            <CustomButton
              title="Add"
              containerStyles=" bg-emerald-600 rounded-3xl p-1"
              handleClick={add}
            />
          </div>

          <div>
            <CustomButton
              title="reset"
              containerStyles=" bg-amber-300  rounded-3xl p-1"
              handleClick={reset}
            />
          </div>

          <div>
            <CustomButton
              title="subtract"
              containerStyles=" bg-red-400  rounded-3xl p-1"
              handleClick={subtract}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
