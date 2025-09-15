import {useContext} from "react";
import {TodoItem} from "./TodoItem";

import {TodoContext} from "../contexts/TodoContext";

export function TodoGroup() {
    const {state} = useContext(TodoContext)

    return <div>
        <div className={"todo-title"}>Todo List</div>
        {state.length === 0 ? (
            <div className="todo-empty">Add the things you need to do today...</div>
        ) : (
            state.map((item, index) => (
                <TodoItem todo={item} index={index}/>
            ))
        )}
    </div>;
}