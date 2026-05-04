import ListTasks from "../components/ListTasks";
import TaskForm from "../components/TaskForm";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Task Manager</h1>
      <div className=" pb-6 ">
        <TaskForm />
      </div>
      <div>
        <ListTasks />
      </div>
    </div>
  );
};
export default Home;
