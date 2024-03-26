import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task };

    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'Post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data =  await res.json();
    setTasks([...tasks, data])
    setShowAddTask(false)
  
  }
  const onDeleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'Delete' })
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const setReminder = async (id) => {
    const task= await fetchTask(id)

    const updateTask={...task,reminder:!task.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'Put',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })
    const data =await res.json()
   
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))

  }
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()

      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();
    return data;
  }
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data;
  }

  return (
    <div className="container">
      <Header title="My Task Tracker" showTask={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDeleteTask}  setReminder={setReminder} /> : <h3>No task Found</h3>}
      <Footer/>
    </div>
  );
}

export default App;
