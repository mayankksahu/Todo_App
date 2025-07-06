import TodoItems from "./TodoItems"

const Todos = (props) => {

let myStyle={
  minHeight:"70vh",
  margin:"40px auto"
}

  return (
    <div className='container ' style={myStyle}>
      <h3 className=' my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return(
          <> 
          <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
          <hr/>
          </>
          )
        })}

    </div>
  )
}

export default Todos
