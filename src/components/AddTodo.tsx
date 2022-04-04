import { useState } from "react";
import { todosVar } from "../cache";
import { useTodos } from "../hooks/useTodos";

const AddTodo = () => {

	const [value, setValue] = useState('')
	const { addTodo } = useTodos(todosVar);


	const onAdd = () => {
		if(!value.trim()) {
			return;
		}

		setValue('');
		addTodo(value);
	}

	return (
		<>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<input value={value} style={{width: '200px'}}
					onChange={(event) => setValue(event.target.value)}
				></input>
				<div style={{width: '150px', display: 'flex', justifyContent: 'flex-end'}}>
					<button onClick={onAdd}>Add</button>
				</div>
			</div>

		</>
	);
}

export default AddTodo;