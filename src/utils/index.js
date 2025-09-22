import toast from 'react-hot-toast';

//get
export const getRecipes = () =>{
    let recipes = [];
    const storedRecipes = localStorage.getItem('recipes');
    if(storedRecipes){
        recipes = JSON.parse(storedRecipes);
    }
    return recipes;
}
//save
export const saveRecipes = (recipe) =>{
    let recipes = getRecipes();
    const isExistsRecipe = recipes.find(r=> r.idMeal === recipe.idMeal);
    if(isExistsRecipe){
        toast.error('You have already bookmarked this recipe');
    }
    else{
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        toast.success('Recipe bookmarked successfully');
    }
}

//delete
export const deleteRecipes = (idMeal) =>{
    let recipes = getRecipes();
    const remainingRecipes = recipes.filter(r=> r.idMeal !== idMeal);
    localStorage.setItem('recipes', JSON.stringify(remainingRecipes));
    toast.success('Recipe removed from bookmark successfully');
}