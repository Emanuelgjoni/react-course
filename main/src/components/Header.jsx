import Button from "./Button"

const Header = ({title,showTask,showAdd}) => {

  return (
  <div className="header">
    <h1>{title}</h1>
    <Button title={showAdd?"Close":'Add task'} color={showAdd?"red":'green'} classes='btn' onClick={showTask}/>
  </div>
    
  )
}
Header.defaultProps={
    'title': 'List of tasks',
}
export default Header
