import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function TodoDetailPage() {
    const {id} = useParams();
    const {state} = useContext(TodoContext);
    const todo = state.filter((todo) => todo.id === id);

    if (todo.length === 0) {
        return <div>Not Found Todo</div>
    }

    return <div>
        {todo[0].text}
    </div>
}