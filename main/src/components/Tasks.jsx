import Task from "./Task"
const Tasks = ({ tasks, onDelete,setReminder}) => {

    return (
        <>
            {tasks.map((task) => (
<Task key={task.id} task={task} onDelete={onDelete} setReminder={setReminder} style={task.reminder? {backgroudColor:'blue'}:{backgroudColor:'red'}}/>
))}
        </>
    )
}

export default Tasks
