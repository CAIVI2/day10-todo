import {api} from "./api/mockApi";

export function useTodoService() {
    const deleteTodo = (props) => {
        return api.delete(`/todos/${props.todo.id}`);
    }

    const updateTodo = (props) => {
        return api.put(`/todos/${props.todo.id}`, {id: props.todo.id, done: !props.todo.done})
            .then(res => res.data);
    }

    const loadTodos = () => {
        return api.get("/todos")
            .then(response => response.data)
    }

    const createTodo = (inputText) => {
        return api.post("/todos", {text: inputText.trim(), done: false})
            .then(res => res.data);
    }

    return {loadTodos, createTodo, updateTodo, deleteTodo};
}