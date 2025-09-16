import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function TodoDetailPage() {
    const {id} = useParams();
    const {state} = useContext(TodoContext);
    const todo = state.filter((todo) => todo.id === id);

    if (todo.length === 0) {
        return <div className="todo-detail-center">
            <div className="todo-detail-notfound">Not Found Todo</div>
        </div>;
    }

    const {id: todoId, text, done} = todo[0];

    return (
        <div className="todo-detail-center">
            <div className="todo-detail-card">
                <div className="todo-detail-title">Todo Detail</div>
                <div style={{marginBottom: 8}}><span className="todo-detail-label">ID:</span> {todoId}</div>
                <div style={{marginBottom: 8}}><span className="todo-detail-label">Text:</span> {text}</div>
                <div>
                  <span className="todo-detail-label">Status:</span> {done ? <span className="todo-detail-status-done">Done</span> : <span className="todo-detail-status-notdone">Not Done</span>}
                </div>
            </div>
        </div>
    );
}