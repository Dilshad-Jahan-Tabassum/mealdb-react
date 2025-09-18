import React, { useState } from 'react';
import { Link, Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { MdOutlineOndemandVideo } from "react-icons/md";
import Loader from '../Components/Loader';

const RecipeCard = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const singleRecipe = useLoaderData();
     //console.log(singleRecipe);
     const recipe = singleRecipe.meals[0];
     const {strMeal,strCategory,strArea} = recipe;
    //console.log(recipe.strMeal);
    const navigation = useNavigation();
  if(navigation.state === 'loading') return <Loader />;
    return (
        <div>
            <div className="py-5 mb-5 space-y-4 place-items-center">
                        <h3  className=" text-2xl font-semibold sm:text-3xl">{strMeal}</h3>
                        <p className="text-sm text-gray-400">Category: {strCategory} | Area: {strArea}</p>
            </div>
            <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap  dark:bg-gray-100 dark:text-gray-800">
                <Link to=''
                onClick={()=> setTabIndex(0)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b' } rounded-t-lg dark:border-gray-600 dark:text-gray-900">`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Content</span>
                </Link>
                <Link to='video'
                onClick={()=> setTabIndex(1)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b' } rounded-t-lg dark:border-gray-600 dark:text-gray-900">`}>
                    
                    <MdOutlineOndemandVideo />

                    <span>Video</span>
                </Link>
            
            </div>
        
            
        <Outlet></Outlet>        

        </div>
      
    );
};

export default RecipeCard;