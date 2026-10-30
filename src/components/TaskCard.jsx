import React, { useContext } from "react";
import {CalendarDays, Pencil, Trash2, ChevronDown} from "lucide-react";
import { Mycontext } from "../context/MyContext";

const priorityColors = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-yellow-100 text-yellow-600",
  Low: "bg-green-100 text-green-600",
};

const TaskCard = ({task}) => {

let {moveNext, onEdit, onDelete,} = useContext(Mycontext)


  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-3 hover:shadow-md transition-all duration-200">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold
             ${priorityColors[task?.priority]}
            `}
        >
          {task?.priority}
        </span>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onEdit(task)}
            className="text-gray-500 hover:text-indigo-600 transition"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-1 text-xl font-bold text-gray-800">
        {task?.title.length > 25 ? task?.title.slice(0,25)+ "..."
        :task?.title}
      </h2>

      {/* Description */}
      <p className="mt-1 text-gray-500 leading-relaxed">
        {task?.description}
      </p>

      {/* Bottom */}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-red-500 font-medium">
          <CalendarDays size={18} />
          <span>{task?.dueDate}</span>
        </div>

        {/* <select
        //   value={task.status}
          onChange={(e) =>
            onMove(task.id, e.target.value)
          }
          className="bg-indigo-50 text-indigo-700 font-medium px-4 py-2 rounded-xl outline-none cursor-pointer"
        >
          <option value="todo">Move to</option>
          <option value="todo">Todo</option>
          <option value="inprogress">In Progress</option>
          <option value="completed">Completed</option>
        </select> */}

        <button 
        onClick={()=>{moveNext(task.id)}}
        className="bg-indigo-50 text-indigo-700 font-medium px-4 py-2 rounded-xl outline-none cursor-pointer">Move to Next</button>

      </div>
    </div>
  );
};

export default TaskCard;