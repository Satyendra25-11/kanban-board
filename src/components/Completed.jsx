import TaskCard from './TaskCard'
import { Mycontext } from '../context/MyContext'
import { useContext } from 'react'
import EmptyTasks from './EmptyTasks'

const Completed = () => {

  let {completedTask, allTasks, searching, filteredTask, handleAddTask} = useContext(Mycontext)

     const searched = filteredTask.filter((t)=>t.title.includes(searching) && t.status === "Completed" )


  return (
    <div className='rounded p-2 flex flex-col gap-2 bg-gray-300'>
        <div className='flex justify-start gap-2 items-center'>
            <div className='h-3 w-3 rounded-full bg-green-800'></div>
        <h1 className='text-lg font-semibold'>Completed</h1>
        </div>
        <div className='flex flex-col gap-2'> 
            {searched.length === 0 ? (
        <EmptyTasks />
      ) : 
       searched.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })
      }
        
        </div>
    </div>
  )
}

export default Completed