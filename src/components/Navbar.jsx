import { Mycontext } from "../context/MyContext";
import { useContext } from "react";

const Navbar = () => {

let { isAddTaskFormOpen, setIsAddTaskFormOpen, handleAddTask} = useContext(Mycontext)





  return (
    <nav className="bg-white shadow-md border-b
     
     ">
      <div className="max-w-full mx-5 px-2 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-indigo-600">
            Kanban Board
          </h1>
          <p className="text-sm text-gray-500">
            Organize your work efficiently
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          <button className="py-2 px-3 rounded-xl bg-blue-700 hover:bg-blue-600"
          onClick={handleAddTask}
          >Add Task</button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;