import './index.css'

import {BrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import router from './router/Router.jsx'; // router.js file theke router import kora hoyeche
// router.js file e amra createBrowserRouter diye router create korechi



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(

    <RouterProvider router={router}/>
,
)
