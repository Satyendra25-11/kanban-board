import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Tasks from './components/Tasks'
import AddTaskForm from './components/AddTaskForm'
import { Mycontext } from './context/MyContext'

const App = () => {

  let {darkMode, setDarkMode, isAddTaskFormOpen, setIsAddTaskFormOpen} = useContext(Mycontext)

  


  return (
    <div className='w-full relative'>
     {isAddTaskFormOpen?  <AddTaskForm /> :""}
      <Navbar />
      <SearchBar />
      <Tasks />
    </div>
  )
}

export default App