import {useState, useEffect} from "react";

const fakeTodoDB = [{id: 0, message: 'Fake Todo', startDateTime: '01/05/2023'}]

export const fetchTodos = () => {
  console.log('fetch todos')
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
		
		const newTodos = await fetchTodos()
		setTodos(newTodos)
	}

	return {todos, createTodo}
}