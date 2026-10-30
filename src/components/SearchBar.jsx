import { useContext } from "react";
import { Mycontext } from "../context/MyContext";

const SearchBar = (
//     {
//   search,
//   setSearch,
//   priority,
//   setPriority,
//   status,
//   setStatus,
// }
) => {


let {searching, setSearching, priority, setPriority, dueDate, setDueDate} = useContext(Mycontext)




  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searching}
        onChange={(e) => setSearching(e.target.value)}
        className="w-full md:flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Priority Filter */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full md:w-48 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* Due Date Status Filter */}
      <select
        // value={status}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full md:w-52 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Tasks</option>
        <option value="upcoming">Upcoming</option>
        <option value="today">Due Today</option>
        <option value="overdue">Overdue</option>
      </select>
    </div>
  );
};

export default SearchBar;