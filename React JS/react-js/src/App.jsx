import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/home";
import StaticPage from "./pages/Static";
import CounterPage from "./pages/Counter";
import DynamicPage from "./pages/Dynamic";
import TodoList from "./pages/TodoList";

import MainLayout from "./layouts/Mainlayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "static",
                element: <StaticPage />
            },
            {
                path: "dynamic",
                element: <DynamicPage />
            },
            {
                path: "counter",
                element: <CounterPage />
            },
            {
                path: "todo",
                element: <TodoList />
            }
        ]
    }
]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;