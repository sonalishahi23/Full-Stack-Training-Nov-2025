import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/home";
import StaticPage from "./pages/Assignments/Static";
import CounterPage from "./pages/Assignments/Counter";
import DynamicPage from "./pages/Assignments/Dynamic";
import AssignmentTodoList from "./pages/Assignments/AssignmentTodoList";

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

import RBAccordions from "./pages/Interactive Components/RBAccordions";
import RBCarousels from "./pages/Interactive Components/RBCarousels";
import RBDropdowns from "./pages/Interactive Components/RBDropdowns";
import RBModal from "./pages/Interactive Components/RBModal";
import RBNavbarOffcanvas from "./pages/Interactive Components/RBNavbarOffcanvas";
import RBNavsTabs from "./pages/Interactive Components/RBNavsTabs";
import RBOverlays from "./pages/Interactive Components/RBOverlays";

import RBForms from "./pages/Forms/BasicFormControls";
import RBFormikValidation from "./pages/Forms/FormikValidation";
import RHFBasicValidation from "./pages/Forms/RHFBasicValidation";
import RHFYupSchema from "./pages/Forms/RHFYupSchema";

import BlogListing from "./pages/AdvanceRouting/BlogListing";
import BlogDetail from "./pages/AdvanceRouting/BlogDetail";
import BlogSearch from "./pages/AdvanceRouting/BlogSearch";
import NotFound from "./pages/AdvanceRouting/NotFound";


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
                element: <AssignmentTodoList />
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
            },
            {
                path: "accordions",
                element: <RBAccordions />
            },
            {
                path: "carousels",
                element: <RBCarousels />
            },
            {
                path: "dropdown",
                element: <RBDropdowns />
            },
            {
                path: "modals",
                element: <RBModal />
            },
            {
                path: "navbar-offcanvas",
                element: <RBNavbarOffcanvas />,
            },
            {
                path: "navs-tabs",
                element: <RBNavsTabs />,
            },
            {
                path: "overlays",
                element: <RBOverlays />,
            },
            {
                path: "Form",
                element: <RBForms />,
            },
            {
                path: "formik-validation",
                element: <RBFormikValidation />,
            },
            {
                path: "rhfvalidation",
                element: <RHFBasicValidation />,
            },
            {
                path: "rhf-yup-schema",
                element: <RHFYupSchema />
            },
            {
                path: "blog",
                children: [
                    {
                        index: true,
                        element: <BlogListing />
                    },
                    {
                        path: "search",
                        element: <BlogSearch />
                    },
                    {
                        path: ":id",
                        element: <BlogDetail />
                    },
                    {
                        path: "/blog/search",
                        element: <BlogSearch />
                    },
                    {
                        path: "/blog/search/:keyword",
                        element: <BlogSearch />
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound />
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