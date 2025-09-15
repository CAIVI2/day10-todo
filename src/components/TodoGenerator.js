import {useState, useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";
import { Input, Button } from 'antd';

export function TodoGenerator() {
    const [input, setInput] = useState("");
    const {dispatch} = useContext(TodoContext);
    const {createTodo} = useTodoService();

    function handleAdd() {
        if (input.trim() === "") return;
        createTodo(input.trim())
            .then(todo =>
                dispatch({type: "ADD_TODO", payload: todo})
            )
        setInput("");
    }

    return (
        <div className={"todo-add"}>
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onPressEnter={handleAdd}
            />
            <Button type="primary" className={"todo-add-button"} onClick={handleAdd}>add</Button>
        </div>
    );
}