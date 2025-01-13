import { useEffect, useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import MyList from './MyList';
import MyTask from './MyTask';


function App() {
  const [taskPlan,setTaskPlan] = useState( 
   localStorage.taskPlan ? JSON.parse(localStorage.taskPlan) : [])
  const [selectedDay,setSelectedDay] = useState(false)

  const addTask = ()=> {
    const newTask = {
      title: 'Today is ...',
      id: uuidv4(),
      taskForADay: '',
      details: ''
    }
    setTaskPlan([newTask,...taskPlan])
  }
  const deleteTask = (taskId) =>{
    setTaskPlan(taskPlan.filter(({id}) => id !== taskId))
  }
  const updateTask = (myUpdateTask) => {
    const updateTasks = taskPlan.map((taskPlan)=>{
      if (taskPlan.id === myUpdateTask.id) {
        return myUpdateTask
      }
      return taskPlan;
    })
    setTaskPlan(updateTasks)
  }
  
  const getActiveTask = () => {
    return taskPlan.find(({id}) => id === selectedDay)
  }
  useEffect(()=> {
    localStorage.setItem('taskPlan',JSON.stringify(taskPlan))
  },[taskPlan])

    return (    
      <div>
        <div className='header'>
          <h1>DAILY PLANNER</h1>
        </div>
        <div className='container'>
          <MyTask taskPlan={taskPlan} 
                  addTask={addTask}
                  deleteTask={deleteTask}
                  selectedDay={selectedDay}
                  setSelectedDay={setSelectedDay}
                  />       
          <MyList selectedDay={getActiveTask()}
                  updateTask={updateTask}/>
        </div>
      </div>      
  )
}

export default App;
