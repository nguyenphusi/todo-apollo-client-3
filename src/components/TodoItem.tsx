import { useState } from "react";
import { Todo, todosVar } from "../cache";
import { useTodos } from "../hooks/useTodos";

interface TodoItemProps {
	todo: Todo;
}

const TodoItem = ({todo}: TodoItemProps) => {

	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState(todo.title);

	const { deleteTodo, editTodo, toggleCompleteTodo } = useTodos(todosVar);


	const onDelete = () => {
		deleteTodo(todo.id);
	};

	const onEdit = () => {
		setIsEdit(false);
		editTodo({id: todo.id, title: value});
	}

	const onToggleComplete = () => {
		toggleCompleteTodo(todo.id);
	}

	return (
		<li style={{display: 'flex', justifyContent: 'space-between', paddingTop: '4px'}}>
			{isEdit ? 
				<>
					<div style={{display: 'flex', width: '200px'}}>
						<input type='checkbox' checked={todo.isCompleted} onChange={onToggleComplete}/>
						<input style={{ width: '200px'}} value={value} onChange={(event) => setValue(event.target.value)} />
					</div>
					<div style={{width: '150px', display: 'flex', justifyContent: 'flex-end'}}>
						<button onClick={onEdit}>Save</button>
						<button onClick={onDelete}>Delete</button>
					</div>

				</>
				 : 
				<>
					<div style={{display: 'flex', width: '200px'}}>
						<input type='checkbox' checked={todo.isCompleted} onChange={onToggleComplete}/>
						<div style={{textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>{todo.title}</div>
					</div>
					<div style={{width: '150px', display: 'flex', justifyContent: 'flex-end'}}>
						<button onClick={() => setIsEdit(true)}>Edit</button>
						<button onClick={onDelete}>Delete</button>
					</div>
				</>
			}
		</li>
	);
}

export default TodoItem;