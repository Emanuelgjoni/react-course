import Button from "./Button"

const Header = ({title}) => {

const onClick = () =>{
console.log('onClick');
}

  return (
  <div className="header">
    <h1>{title}</h1>
    <Button title='Add' color='blue' classes='btn' onClick={onClick}/>
  </div>
    
  )
}
Header.defaultProps={
    'title': 'List of tasks',
}
export default Header
