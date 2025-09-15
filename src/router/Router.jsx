import Home from '../pages/Home.jsx'
import BrowseRecipes from '../pages/BrowseRecipes.jsx'
import Bookmarks from '../pages/Bookmarks.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import { createBrowserRouter } from 'react-router-dom'
import RecipeCard from '../pages/RecipeCard.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,
    children:[
      {
    path:'/', 
    element: <Home></Home>,
    loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    },
    {
    path:'/browse-recipes',
    element: <BrowseRecipes></BrowseRecipes>,
    loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') 
    },
    {
      path:'/recipe/:id',
      element:<RecipeCard></RecipeCard>,
      loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    },
    {
      path:'/bookmarks',
      element: <Bookmarks></Bookmarks>
    }
    ]
  },
  
])

export default router;