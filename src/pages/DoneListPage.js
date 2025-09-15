import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function DoneListPage() {
    const {state} = useContext(TodoContext)
    const doneTodos = state.filter(item => item.done);

    return <div>
        <div className={"title"}>Done List</div>
        {doneTodos.length > 0 ? (
            doneTodos.map((item, index) => {
                return <TodoItem todo={item} index={index}/>
            })
        ) : (
            <p>No done things...</p>
        )}
    </div>;
}