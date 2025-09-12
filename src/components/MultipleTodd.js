import {TodoGroup} from "./TodoGroup";
import {TodoItemGenerator} from "./TodoItemGenerator";

export function MultipleTodd() {
    return <div>
        <TodoGroup/>
        <TodoItemGenerator/>
    </div>;
}