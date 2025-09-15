import {useState, useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";

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
            <input
                type="text" value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="button" className={"todo-add-button"} onClick={handleAdd}>add</button>
        </div>
    );
}