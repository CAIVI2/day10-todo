import {useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routes} from "./routes/Routes";
import {useTodoService} from "./useTodoService";

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    const {loadTodos} =useTodoService();
    useEffect(() => {
        loadTodos()
            .then(todos => dispatch({type: "LOAD_TODOS", payload: todos}))
    }, [dispatch])

    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}></RouterProvider>
            </TodoContext.Provider>
        </div>
    );
}

export default App;