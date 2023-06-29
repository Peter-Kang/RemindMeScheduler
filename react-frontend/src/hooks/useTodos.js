
import API from '../utils/api.js'
import useRequest from "./useRequest.js";

//api calls
//promises are like tasks in c#
export const createToDoAPICall = async (params) => {
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
export const useGetAllTodos = () => {
	return useRequest('/ToDo/GetAllToDo');
}