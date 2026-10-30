import Todo from './Todo'
import InProgress from './InProgress'
import Completed from './Completed'
import { Mycontext } from '../context/MyContext'
import { useContext } from 'react'

const Tasks = () => {






  return (
    <div className='w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-start '>
        <Todo />
        <InProgress />
        <Completed />
    </div>
  )
}

export default Tasks