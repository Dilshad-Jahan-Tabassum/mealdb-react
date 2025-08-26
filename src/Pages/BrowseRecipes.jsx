import { useLoaderData } from 'react-router-dom';
import RecipesCards from '../Components/RecipesCards';

const BrowseRecipes = () => {
  const BrowseRecipes = useLoaderData();
  console.log(BrowseRecipes);
  return (
    <div className='grid grid-cols-3 container mx-auto gap-4 my-8'>
      {/* <h2 className="text-3xl font-bold text-center my-8">Browse Recipes</h2> */}
      {
        BrowseRecipes.meals.map(recipe=><RecipesCards key={recipe.idMeal} recipeCard={recipe}></RecipesCards>)
      }
    </div>
  );
};

export default BrowseRecipes;