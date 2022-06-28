import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


// headache 1:03
function App() {
const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'Doctors Appoinment',
    day: 'Feb 6',
    reminder: true,
  },
  {
    id: 2,
    text: 'Walk Dog',
    day: 'Feb 2',
    reminder: true,
  },
  {
    id: 3,
    text: 'Meeting',
    day: 'feb 9',
    reminder: false,
  },
])

// delete task from ui
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// reminder green notification
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? { ...task, reminder: !task.reminder} : task))
}
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>  
  );
}

export default App;
