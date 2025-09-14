import {useContext} from "react";
import {TodoItem} from "./TodoItem";

import {TodoContext} from "../contexts/TodoContext";

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    return <div>
        <div className={"todo-title"}>Todo List</div>
        {
            state.map((item, index) => {
                return <div className="todo-row" key={index}>
                    <TodoItem todo={item} key={index} index={index}/>
                    <button type="button">X</button>
                </div>
            })
        }
    </div>;
}