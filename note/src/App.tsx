import { useState } from "react";
import ChatBot from "react-chatbotify";

function App() {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask("");
  };
  const handleDelete = () => {};
  const flow = {
    start: {
      message: "Hello world!",
    },
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">📝 Note App</h1>

      <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-md mb-6">
        <div>
          <input
            placeholder="add task..."
            value={task}
            onChange={(e: any) => setTask(e.target.value)}
            className="grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
          >
            {" "}
            add task
          </button>
        </div>
      </form>
      <ul className="w-full max-w-md space-y-2">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet...</p>
        ) : (
          tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
            >
              <span>{t}</span>
              <button
                onClick={() => handleDelete()}
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
      <ChatBot flow={flow} />
    </div>
  );
}

export default App;
