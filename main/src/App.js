import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'appointment number 2',
      day: 'feb 5th at2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'test sss number 2',
      day: 'feb 6th at2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'appointment number 2',
      day: 'feb 5th at5:30pm',
      reminder: false,
    }
  ])
  const onDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const setReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?{...task,reminder:!task.reminder}  :task))

  }

  return (
    <div className="container">
      <Header title="My Task Tracker" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDeleteTask} setReminder={setReminder} /> : <h3>No task Found</h3>}
    </div>
  );
}

export default App;
