import { createBrowserRouter } from "react-router-dom";
import CalendarPage from "../components/Calander";
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
