import {useState, useEffect} from "react";
import API from '../utils/api.js'


//api calls
//promises are like tasks in c#
export const createToDoAPICall = async (params) => {
	console.log('createTodoAPICall');
	console.log(params);
	const filteredParams = { "message": params.messageValueInput,
		"context":"ToDo",
		"startDateTime":String(params.startDateValue),
		"frequencyInHours":String(params.frequencyValueInputInt) };
	const { data } = await API.post('/ToDo/CreateToDo',filteredParams);
	return data;
};

export const fetchToDoAPICall = async (params) => {
	const {data} = await API.get('/ToDo/GetAllToDo');
	return data;
}

//hooks
export const useTodos = () => {

	const [todos, setTodos] = useState([])
	useEffect(() => {
		// async function to fetch todos
		const getAndUpdateToDos = async () => {
			const todoResponse = await fetchToDoAPICall()
			setTodos(todoResponse)
		}
		getAndUpdateToDos()
	}, [])

	const createTodo = async (newTodoData) => {
		console.log('make network request', newTodoData)
		// should actually be a network request to add new todo, is push for fake purposes
		//fakeTodoDB.push({id: 1, message: 'Fake Todo 2', startDateTime: '03/24/2023' })
		await createToDoAPICall(newTodoData);
		const newTodos = await fetchToDoAPICall()
		setTodos(newTodos)
	}

	return {todos, createTodo}
}