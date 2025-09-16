import { createBrowserRouter } from "react-router-dom";
import CalendarPage from "../components/Calendar";
import Home from "../pages/Home";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/calendar",
        element: <CalendarPage />
    }
]);

export default routers;
