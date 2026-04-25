import ListTasks from "../components/ListTasks";
import TaskForm from "../components/TaskForm";

const Home = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <ListTasks />
    </div>
  );
};
export default Home;
