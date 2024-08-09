import { createBrowserRouter } from "react-router-dom";
import App from "../Application/App";
import Home from "../Home/Home";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Home/>
            }
        ]
    }
])