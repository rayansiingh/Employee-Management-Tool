import React from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({ data }) {
  return (
    <div className="h-screen p-10 bg-[#0d1b2a]">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
}

export default EmployeeDashboard;
