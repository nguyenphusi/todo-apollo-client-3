
import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";

export interface Todo {
	id: string;
	title: string;
	isCompleted: boolean;
}

export type Todos = Todo[];

export const cache: InMemoryCache = new InMemoryCache(
	// We can also set cache if we want get todos via useQuery
	// {
	// typePolicies: {
	// 	Query: {
	// 		fields: {
	// 			todos: {
	// 				read() {
	// 					return todosVar();
	// 				}
	// 			},
	// 		}
	// 	}
	// }
	// }
);

/**
 * Set initial values when we create cache variables.
 */

const todosInitialValue: Todos = [
	{
		id: '1',
		isCompleted: false,
		title: "Default Task 1"
	}
]

export const todosVar: ReactiveVar<Todos> = makeVar<Todos>(
	todosInitialValue
);
