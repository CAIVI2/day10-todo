import {useContext, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoList} from "./components/TodoList";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useParams, useRouteError} from "react-router";
import {TodoItem} from "./components/TodoItem";

export const initState = [
    {id: 1, text: "This is the first thing I need to do", done: false},
    {id: 2, text: "This is the second thing I need to do", done: false},
];

function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/todos/1"}>ID:1</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
}

function ErrorPage() {
    const error = useRouteError();
    return <div>
        {error?.status === 404 ? <div className={"not-found"}><h1>404 not found</h1><span>Try</span></div> :
            <div>{JSON.stringify(error)}</div>}
    </div>
}

function HomePage() {
    return <TodoList/>;
}

function TodoDetailPage() {
    const {id} = useParams();
    const {state, dispatch} = useContext(TodoContext);
    const todo = state.filter((todo) => todo.id === parseInt(id));

    if (todo.length === 0) {
        return <div>Not Found Todo</div>
    }

    return <div>
        {JSON.stringify(todo)}
        <TodoItem todo={todo[0]} index={id}></TodoItem>
    </div>
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage/>
            }
        ]
    }
]);

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}></RouterProvider>
            </TodoContext.Provider>
        </div>
    );
}

export default App;