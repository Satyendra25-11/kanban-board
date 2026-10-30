import { useContext } from "react"
import { Mycontext } from "../context/MyContext"

const EmptyTasks = () => {

    let {handleAddTask} = useContext(Mycontext)

  return (
    <div className="p-3">
          <div className="bg-gray-100 p-2 flex flex-col justify-center items-center font-semibold text-gray-600">
            <h1>There is no Task in this status.</h1>
            <button
              className="py-2 px-3 mt-2 rounded-xl w-fit text-black text-sm bg-blue-700 hover:bg-blue-600"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
  )
}

export default EmptyTasks