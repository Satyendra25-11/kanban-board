import TaskCard from './TaskCard'
import { Mycontext } from '../context/MyContext'
import { useContext } from 'react'
import EmptyTasks from './EmptyTasks'

const InProgress = () => {

  let {filteredTask} = useContext(Mycontext)

   const searched = filteredTask.filter((t)=> t.status === "In Progress" )


  return (
   <div className='rounded p-2 flex flex-col gap-2 bg-gray-300'>
        <div className='flex justify-start gap-2 items-center'>
            <div className='h-3 w-3 rounded-full bg-blue-800'></div>
        <h1 className='text-lg font-semibold'>In Progress</h1>
        </div >
        {searched.length === 0 ? (
        <EmptyTasks />
      ) : searched.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })
      }
    </div>
  )
}

export default InProgress