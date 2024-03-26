import Task from "./Task"
const Tasks = ({ tasks, onDelete,setReminder}) => {

    return (
        <>
            {tasks.map((task,index) => (
<Task key={index} task={task} onDelete={onDelete} setReminder={setReminder}  style={task.reminder? {backgroudColor:'blue'}:{backgroudColor:'red'}}/>
))}
        </>
    )
}

export default Tasks
