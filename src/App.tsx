import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import Users from "./components/Users/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<Main />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
