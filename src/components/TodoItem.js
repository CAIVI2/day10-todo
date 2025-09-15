import {useContext} from "react";
import {Button} from 'antd';

import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)
    const navigate = useNavigate();
    const {putTodo, deleteTodo} = useTodoService();

    function makeAsDone() {
        putTodo(props)
            .then((todo) => {
                dispatch({type: "UPDATE_TODO", payload: todo})
            })
    }

    function handleDelete() {
        deleteTodo(props)
            .then(() => {
                dispatch({type: "DELETE_TODO", payload: {id: props.todo.id}})
            })
    }

    function navigateToDetail() {
        navigate(`/todos/${props.todo.id}`);
    }

    return <div className="todo-row">
        <div className={"todo-item"}>
        <span className={props.todo.done ? "todo-done" : ""} onClick={makeAsDone}>
            {props.todo.text}
        </span>
        </div>
        <Button type="primary" danger size="small" className={"todo-delete-button"} onClick={handleDelete}>X</Button>
        <Button size="small" info className={"todo-detail-button"} onClick={navigateToDetail}>Detail</Button>
    </div>;
}