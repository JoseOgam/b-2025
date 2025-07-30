import { useSelector } from "react-redux";

export const ListTasks = () => {
  const tasks = useSelector((state) => state.tasks.list);
  return (
    <div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className="text-red-600 hover:text-red-800">❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
