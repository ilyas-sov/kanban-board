import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Routes>
          <Route path="/" index element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<Main />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
