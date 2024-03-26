import { TiDeleteOutline } from "react-icons/ti";
const Task = ({task,onDelete,setReminder}) => {
    console.log(`task ${task.reminder}?'reminder':''`);
  return (
    <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>setReminder(task.id)}>
      <h3>{task.text}   <TiDeleteOutline style={{color:'red', cursor:'pointer'}} onDoubleClick={()=>onDelete(task.id)} /></h3>
      <p>{task.day}</p>
    </div>  
  )
}

export default Task
