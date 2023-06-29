
import { useEffect, useState } from 'react';
import API from '../utils/api.js'
import useRequest from "./useRequest.js";

//api calls
//promises are like tasks in c#

//move to apis
const createToDoAPICall = async (params) => {
	console.log('createTodoAPICall');
	const filteredParams = { "message": params.messageValueInput,
		"context":"ToDo",
		"startDateTime":String(params.startingDateValue),
		"frequencyInHours":String(params.frequencyValueInputInt) };
	console.log(filteredParams);
	const { data } = await API.post('/ToDo/CreateToDo',filteredParams);

	return data;
};



//hooks
const useGetAllTodos = () => {
	//live as message comes in
	return useRequest('/ToDo/GetAllToDo');
};

//interface for todos
export const useTodos = () => {
	const [todos, setToDos] = useState([]);

	const getAllTodoAPICall = async () => {
		const { data }  = await API.get('/ToDo/GetAllToDo');
		let reminderResultArray = [];
		if(data?.data?.todos)
		{
			reminderResultArray = data.data.todos;
		}
		setToDos(reminderResultArray);
		console.log(todos);
	};

	useEffect(()=> {
		getAllTodoAPICall();
	},[])

	const createToDo = async (params) =>
	{
		await createToDoAPICall(params);
		getAllTodoAPICall();
	}

	return {todos, createToDo};
}