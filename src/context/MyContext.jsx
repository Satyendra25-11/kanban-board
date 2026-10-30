import { createContext, useEffect, useState } from "react";

export const Mycontext = createContext();

const ContextProvider = ({ children }) => {
  // const [darkMode, setDarkMode] = useState(true);
  const [isAddTaskFormOpen, setIsAddTaskFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null)
  const [searching, setSearching] = useState("")
  const [priority, setPriority] = useState("")
  const [status, setStatus] = useState(null)
  const [dueDate, setDueDate] = useState("")



  const [allTasks, setAllTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      try {
        const parsed = JSON.parse(savedTasks);
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        console.log("error in parsing tasking in localstorage", error);
        return [];
      }
    }
    return [];
  });

  c
  

  const todoTask = allTasks.filter((t) => t.status === "Todo");
  const progressTask = allTasks.filter((t) => t.status === "In Progress");
  const completedTask = allTasks.filter((t) => t.status === "Completed");

  const [formData, setFormData] = useState(
    editingTask || {
      title: "",
      description: "",
      priority: "Medium",
      status: "Todo",
      dueDate: "",
    }
  );

  const handleAddTask = () => {
    setIsAddTaskFormOpen(true);
  };

  const onSubmit = (formData) => {
    if(editingTask){
        const filtered = allTasks.filter((t)=> t.id !== formData.id)
        
        const updatedTasks = [...filtered, formData]
        setAllTasks(updatedTasks);
    }
    else{
        const updatedTasks = [...allTasks, formData];
        setAllTasks(updatedTasks);
    }
    
   
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }, [allTasks]);

  const closeForm = () => {
    setIsAddTaskFormOpen(false);
  };

  const moveNext = (id) => {
    setAllTasks((prev) => {
      return prev.map((t) => {
        if (t.id !== id) return t;

        let nextStatus;
        if (t.status === "Todo") {
          nextStatus = "In Progress";
        } else {
          nextStatus = "Completed";
        }
        return { ...t, status: nextStatus };
      });
    });
  };

const onEdit = (task)=>{
    setEditingTask(task)
    setIsAddTaskFormOpen(true)
}

const onDelete= (id)=>{    
    setAllTasks(allTasks.filter((t)=> t.id !== id));
}


const getDueDate = (dueDate)=>{
    const today = new Date()
    today.setHours(0,0,0,0)

    const due = new Date(dueDate)
    due.setHours(0,0,0,0)

    if(today.getTime() === due.getTime){
        return "today"
    }

    if(due < today){
        return "overdue"
    }

    return "upcoming"
}



const filteredTask = allTasks.filter((t)=>{
  

    const matchSearch = searching === "" || 
    t.title.toLowerCase().includes(searching.toLowerCase());


    const matchPriority = priority === "" ||
    t.priority === priority


    const matchDueDate = dueDate === "" ||
    getDueDate(t.dueDate) === dueDate

    

    return (
        matchSearch && matchPriority && matchDueDate
    )
})




  return (
    <Mycontext.Provider
      value={{
        formData, 
        setFormData,
        handleAddTask,
        isAddTaskFormOpen,
        setIsAddTaskFormOpen,
        onSubmit,
        closeForm,
        allTasks,
        todoTask,
        progressTask,
        completedTask,
        moveNext,
        editingTask,
        onEdit,
        onDelete,
        searching,
        setSearching,
        priority,
        setPriority,
        dueDate,
        setDueDate,
        filteredTask
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export default ContextProvider;
