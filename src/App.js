import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext as TodoContext1} from "./contexts/TodoContext";
import {TodoList} from "./components/TodoList";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useRouteError} from "react-router";

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
        {error.status === 404 ? <div className={"not-found"}><h1>404 not found</h1><span>Try</span></div> :
            <div>{JSON.stringify(error)}</div>}
    </div>
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <TodoList/>
            }
        ]
    }
]);

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <TodoContext1.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}></RouterProvider>
            </TodoContext1.Provider>
        </div>
    );
}

export default App;