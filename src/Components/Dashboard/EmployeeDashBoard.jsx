import React from "react";
import TaskListNumbers from "../Miscell/TaskListNumbers.jsx";
import TaskList from "../TaskList/TaskList";
import Header from "../Miscell/Header.jsx";

const EmployeeDashboard = (props) => {
  // console.log("Props from ED: ", props.data);
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
