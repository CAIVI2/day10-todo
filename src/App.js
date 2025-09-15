import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext as TodoContext1} from "./contexts/TodoContext";
import {TodoList} from "./components/TodoList";

export const initState = [
    {id: 1, text: "This is the first thing I need to do", done: false},
    {id: 2, text: "This is the second thing I need to do", done: false},
];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <TodoContext1 value={{state, dispatch}}>
                <TodoList/>
            </TodoContext1>
        </div>
    );
}

export default App;