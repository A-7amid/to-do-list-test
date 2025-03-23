import React, { useState } from "react";
import { useTasks } from "./context/tasks.provider";
import Tasks from "./components/Tasks";

function App() {
  const { handleSaveTask, tasks } = useTasks();

  const [newTask, setNewTask] = useState();

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    handleSaveTask(newTask);
    setNewTask("");
  };

  return (
    <div className="bg-black text-white flex justify-center min-h-screen max-h-full">
      <div className="flex flex-col w-[440px] items-center mt-14">
        <header>
          <h2 className="uppercase font-bold text-2xl mb-6">TO-DO list</h2>
        </header>

        <div className="flex flex-col w-full">
          <div className="flex gap-x-3 mb-8">
            <input
              type="text"
              placeholder="Add a new task..."
              className="px-3 flex py-2 w-full text-sm bg-zinc-900 border-2 border-zinc-800 rounded-md"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            />

            <button
              onClick={handleAddTask}
              type="button"
              className="bg-zinc-800 hover:bg-zinc-700 transition duration-100 rounded-md text-xl flex justify-center items-center h-full cursor-pointer w-14"
            >
              <span className="flex items-center justify-center h-full w-full -translate-y-[2px]">
                +
              </span>
            </button>
          </div>

          <div>
            {tasks.length !== 0 ? (
              <Tasks />
            ) : (
              <div className="text-zinc-500 items-center justify-center flex mt-6">
                Your list is empty. Add some tasks!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
