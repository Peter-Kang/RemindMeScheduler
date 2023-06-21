
import API from '../utils/api.js'
import useRequest from "./useRequest.js";

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

//hooks
export const useCreateTodos = () => {
	const createTodo = async (newTodoData) => {
		await createToDoAPICall(newTodoData);
		const newTodos = await fetchToDoAPICall()
		setTodos(newTodos)
	}
	return createTodo;
}

export const useTodos = () => {
	return useRequest('/ToDo/GetAllToDo');
}