import Todo from "./Todo";

function TodoList({todos,onDelete,onToggle}){
    return(
        <ul>
            {
                todos.map(todo=>(<Todo key={todo.id} onDelete={onDelete} onToggle={onToggle} todo={todo}></Todo>))
            }
        </ul>
    )
}
export default TodoList;

