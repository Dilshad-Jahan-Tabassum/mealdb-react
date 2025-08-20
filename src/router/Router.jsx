import Home from '../pages/Home.jsx'
import BrowseRecipes from '../pages/BrowseRecipes.jsx'
import Bookmarks from '../pages/Bookmarks.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,
    children:[
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
    ]
  },
  
])

export default router;