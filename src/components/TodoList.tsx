import {  useReactiveVar } from "@apollo/client";
import {  todosVar } from "../cache";
import TodoItem from "./TodoItem";

const TodoList = () => {
	
	const todos = useReactiveVar(todosVar);

	// 2nd approach - we can also get the state via useQuery
	// const { data } = useQuery(GET_ALL_TODOS);
	// const todos: Todos = data.todos;


	const allTodosCount = todos.length;
	const allCompletedTodosCount = todos.filter(todo => todo.isCompleted).length;

	return (
		<>
			<div>
				 {allCompletedTodosCount} / {allTodosCount}
			</div>
			<ul style={{ paddingInlineStart: '0px' }}>
				{todos.map((todo) => (
					<TodoItem todo={todo} key={todo.id}/>
				))}
			</ul>
		</>
	);
}

export default TodoList;