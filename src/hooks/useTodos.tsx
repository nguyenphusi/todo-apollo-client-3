import { ReactiveVar } from "@apollo/client";
import { Todo, Todos } from "../cache";
import { v4 as uuidv4 } from "uuid";

export function useTodos(todosVar: ReactiveVar<Todos>) {

	const allTodos = todosVar();

	const addTodo = (title: string) => {
		const newTodo: Todo = {
			id: uuidv4(),
			title: title,
			isCompleted: false,
		};
		todosVar([...allTodos, newTodo]);
	};

	const deleteTodo = (id: string) => {
		const filteredTodos = allTodos.filter((todo: Todo) => todo.id !== id);
		todosVar(filteredTodos);
	};

	const editTodo = ({ id, title }: { id: string; title: string }) => {
		const index = findTodoIndex(allTodos, id);
		const foundTodo = allTodos[index];
		foundTodo.title = title;

		const updatedTodos = allTodos.map((todo) =>
			todo.id === id ? foundTodo : todo
		);

		todosVar(updatedTodos);
	};

	const toggleCompleteTodo = (id: string) => {
		const index = findTodoIndex(allTodos, id);
		const foundTodo = allTodos[index];
		foundTodo.isCompleted = !foundTodo.isCompleted;

		const updatedTodos = allTodos.map((todo) =>
			todo.id === id ? foundTodo : todo
		);

		todosVar(updatedTodos);
	};

	return {
		addTodo,
		deleteTodo,
		editTodo,
		toggleCompleteTodo,
	};
}

const findTodoIndex = (todos: Todo[], id: string) => {
	return todos.findIndex((todo) => todo.id === id);
};
