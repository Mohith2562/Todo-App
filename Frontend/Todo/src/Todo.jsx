function Todo({todo,onDelete,onToggle}){
    return(
        <li>
            <input type="checkbox" checked={todo.completed} onChange={()=> onToggle(todo.id)}/>
            <strong>{todo.title}</strong> - {todo.description}
            <button onClick={()=>onDelete(todo.id)}>Delete</button>
        </li>
    )
}
export default Todo;