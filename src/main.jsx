import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import BrowseRecipes from './Pages/BrowseRecipes.jsx'
import Bookmarks from './Pages/Bookmarks.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>
  },
  {
    path:'/browse-recipes',
    element: <BrowseRecipes></BrowseRecipes>
  },
  {
    path:'/bookmarks',
    element: <Bookmarks></Bookmarks>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
