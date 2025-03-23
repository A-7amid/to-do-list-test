import React from "react";
import { createContext, useContext, useMemo, useState } from "react";
import { mainTasks } from "../../tasks";

const TasksContext = createContext();

const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTask must be used within a TasksProvider");
  }
  return context;
};

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(mainTasks);
  const [isDone, setIsDone] = useState(false);

  const handleSaveTask = (newTask) => {
    tasks.push({ taskName: newTask, id: tasks.length, done: false });
    console.log(tasks);
    setIsDone(false);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    console.log("deleted");
  };

  const handleDoneTask = (id) => {
    tasks.map((task, index) => {
      index == id ? (task.done = !task.done) : "";
      console.log("hi");
      setIsDone(task.done);
    });
  };

  const values = useMemo(
    () => ({
      tasks,
      handleSaveTask,
      handleRemoveTask,
      handleDoneTask,
      isDone,
    }),
    [tasks, isDone]
  );

  return (
    <TasksContext.Provider value={values}>{children}</TasksContext.Provider>
  );
};

export { TasksProvider, useTasks };
