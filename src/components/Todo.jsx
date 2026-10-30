import { useContext } from "react";
import TaskCard from "./TaskCard";
import { Mycontext } from "../context/MyContext";
import EmptyTasks from "./EmptyTasks";
const Todo = () => {
  let { filteredTask} = useContext(Mycontext);


  const searched = filteredTask.filter((t)=>t.status === "Todo")




  return (
    <div className=" rounded flex flex-col gap-2 p-2 bg-gray-300">
      <div className="flex justify-start gap-2 items-center">
        <div className="h-3 w-3 rounded-full bg-gray-600"></div>
        <h1 className="text-lg font-semibold">Todo</h1>
      </div>
      {searched.length === 0 ? (
        <EmptyTasks />
      ) :   searched.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })
      }
    </div>
  );
};

export default Todo;
