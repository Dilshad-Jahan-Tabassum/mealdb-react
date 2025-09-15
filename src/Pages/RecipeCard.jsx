import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipeCard = () => {
    const singleRecipe = useLoaderData();
     //console.log(singleRecipe);
     const recipe = singleRecipe.meals[0];
     //const {strMeal,strCategory,strArea,strInstructions,strMealThumb} = recipe;
    //console.log(recipe.strMeal);

    const ingredients = [];
    for (let i=1; i<=20; i++){
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];

         if(ingredient && ingredient.trim() !== '' && ingredient.trim() !== null && ingredient.trim() !== undefined && measure && measure.trim() !== '' && measure.trim() !== null && measure.trim() !== undefined){
            ingredients.push({ingredient, measure});
         }
    }

   
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-500 text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={recipe.strMealThumb || recipe.strSource} alt="food image not available" className="w-full h-[450px] object-cover" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
                    <div className="space-y-2">
                        <h3  className="inline-block text-2xl font-semibold sm:text-3xl">{recipe.strMeal}</h3>
                        <p className="text-sm text-gray-400">Category: {recipe.strCategory} | Area: {recipe.strArea}</p>
                    </div>
                    <div className="text-gray-100">
                        <p><span className='font-bold text-xl py-2 border-b-1 border-gray-500 w-full inline-block mb-5'>Ingredients</span>
                            {ingredients.map((item, index)=>(
                            <li key={index}>{item.measure} - {item.ingredient}</li>
                        ))}
                        </p>
                        
                        <p><span className='font-bold text-xl py-2 border-b-1 border-gray-500 w-full inline-block mb-5'>Instructions</span>
                            {recipe.strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
      
    );
};

export default RecipeCard;