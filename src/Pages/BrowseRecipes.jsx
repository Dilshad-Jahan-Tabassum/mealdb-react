import { useLoaderData, useNavigation } from 'react-router-dom';
import RecipesCards from '../Components/RecipesCards';
import Loader from '../Components/Loader';

const BrowseRecipes = () => {
 
  const BrowseRecipes = useLoaderData();
  // console.log(BrowseRecipes);
   const navigation = useNavigation();
  if(navigation.state === 'loading') return <Loader />;
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto place-items-center gap-5 sm:gap-5 md:gap-10 lg:gap-5 my-5 '>
      {/* <h2 className="text-3xl font-bold text-center my-8">Browse Recipes</h2> */}
      {
        BrowseRecipes.meals.map(recipe=><RecipesCards key={recipe.idMeal} recipeCard={recipe}></RecipesCards>)
      }
    </div>
  );
};

export default BrowseRecipes;