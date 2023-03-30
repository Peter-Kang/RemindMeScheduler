import {useState, useEffect} from "react";
import API from '../utils/api.js'

const fakeTodoDB = [{id: 0, message: 'Fake ToDo', startDateTime: '01/05/2023'}]

//api calls
//promises are like tasks in c#
export const createTodoAPICall = async (params) => {
	console.log('createTodoAPICall');
	const { data } = await API.post('/CreateToDo',
		params);
	console.log(data);
	return data;
};

//hooks
export const fetchTodos = (onSuccess) => {
  console.log('fetch toDos')
	return [...fakeTodoDB]
}

export const useTodos = () => {
	const [todos, setTodos] = useState([])
	
	useEffect(() => {
		// async function to fetch todos
		const getAndUpdateTodos = async () => {
			const todoResponse = await fetchTodos()
			setTodos(todoResponse)
		}
		getAndUpdateTodos()
	}, [])

	const createTodo = async (newTodoData) => {
		console.log('make network request', newTodoData)

		// should actually be a network request to add new todo, is push for fake purposes
		fakeTodoDB.push({id: 1, message: 'Fake Todo 2', startDateTime: '03/24/2023' })
		await createTodoAPICall(newTodoData);
		const newTodos = await fetchTodos()
		setTodos(newTodos)
	}

	return {todos, createTodo}
}