import { useSelector } from "react-redux";

export const ListTasks = () => {
  const tasks = useSelector((state) => state.tasks.list);
  return (
    <div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className=" flex justify-between">
                {index + 1}. {task}
                <button className="text-red-600 hover:text-red-800">❌</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
