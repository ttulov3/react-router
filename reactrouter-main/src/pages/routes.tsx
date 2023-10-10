import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/index";
import { Sobre } from "./sobre/index";
import { NotFound } from "./NotFound";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },

    {
        path:"/sobre",
        element:<Sobre/>
    },

    {
        path:"*",
        element:<NotFound/>
    }
])

export{routes};