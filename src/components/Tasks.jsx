import React, { useEffect, useState } from "react";
import { useTasks } from "../context/tasks.provider";

const Tasks = () => {
  const { handleDoneTask, handleRemoveTask, tasks, isDone } = useTasks();

  useEffect(() => {}, [isDone]);

  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="font-medium py-3 px-4 flex items-center text-md mb-2 bg-zinc-900 border-2 border-zinc-800 rounded-md justify-between"
        >
          <div className="flex gap-x-3 items-center">
            {/* <input
              onClick={() => handleDoneTask(index)}
              type="checkbox"
              id={index}
              name={task}
              value={task}
              className={`accent-zinc-700 cursor-pointer size-4 rounded-md `}
              onChange={this.oncha}
            /> */}

            <div>
              {task.done ? (
                <div
                  onClick={() => handleDoneTask(task.id)}
                  className="flex size-4 cursor-pointer items-center justify-center text-sm  rounded-sm bg-zinc-700 border-2 border-zinc-700"
                >
                  ✔
                </div>
              ) : (
                <div
                  onClick={() => handleDoneTask(task.id)}
                  className="flex size-4 cursor-pointer rounded-sm bg-transparent border-2 border-zinc-700"
                ></div>
              )}
            </div>

            {/* <span className="line-through decoration-zinc-600 decoration-1 font-normal text-zinc-600"> */}
            {/* {task} */}
            {/* </span> */}
            <span className="font-normal">{task.taskName}</span>
          </div>

          <svg
            onClick={() => handleRemoveTask(index)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-8 rounded-md cursor-pointer text-zinc-500 hover:bg-zinc-800 hover:text-white px-2 py-2 transition duration-100"
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
