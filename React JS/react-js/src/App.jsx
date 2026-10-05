import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/home";
import StaticPage from "./pages/Assignments/Static";
import CounterPage from "./pages/Assignments/Counter";
import DynamicPage from "./pages/Assignments/Dynamic";
import TodoList from "./pages/Assignments/TodoList";

import MainLayout from "./layouts/Mainlayout";

import Badges from "./pages/Non Interactive Components/RBBadges";
import RBBreadcrumbs from "./pages/Non Interactive Components/RBBreadcrumbs";
import RBButtons from "./pages/Non Interactive Components/RBButtons";
import RBButtonGroups from "./pages/Non Interactive Components/RBButtonGroups";
import RBCards from "./pages/Non Interactive Components/RBCards";
import RBImages from "./pages/Non Interactive Components/RBImages";
import RBListGroup from "./pages/Non Interactive Components/RBListGroup";
import RBFigure from "./pages/Non Interactive Components/RBFigure";
import RBPagination from "./pages/Non Interactive Components/RBPagination";
import RBPrgressBars from "./pages/Non Interactive Components/RBPrgressBars";
import RBSpinners from "./pages/Non Interactive Components/RBSpinners";
import RBTables from "./pages/Non Interactive Components/RBTables";


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
            },
            {
                path: "badges",
                element: <Badges />
            },
            {
                path: "breadcrumbs",
                element: <RBBreadcrumbs />
            },
            {
                path: "buttons",
                element: <RBButtons />
            },
            {
                path: "button-group",
                element: <RBButtonGroups />
            },
            {
                path: "cards",
                element: <RBCards />
            },
            {
                path: "images",
                element: <RBImages />
            },
            {
                path: "list-group",
                element: <RBListGroup />
            },
            {
                path: "figures",
                element: <RBFigure />
            },
            {
                path: "pagination",
                element: <RBPagination />
            },
            {
                path: "progress-bars",
                element: <RBPrgressBars />
            },
            {
                path: "spinners",
                element: <RBSpinners />
            },
            {
                path: "tables",
                element: <RBTables />
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