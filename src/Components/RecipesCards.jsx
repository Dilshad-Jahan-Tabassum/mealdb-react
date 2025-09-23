import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";


const RecipesCards = ({recipeCard, deletable, handleDelete}) => {
  // console.log(recipeCard);
  const {strMealThumb, strSource, strMeal,strArea, strCategory, idMeal} = recipeCard;
  
  return (
        <div className="relative">
          <div className=" card bg-base-100 w-full lg:w-96 shadow-lg border border-gray-400 p-5 transition-transform hover:scale-105 mb-5">
          <figure className="rounded-lg">
            <img className="h-68 w-full object-cover"
              src={strMealThumb || strSource}
              alt= "food image" />
          </figure>
          <div className="card-body">
            <h1 className="font-bold text-2xl">{strMeal}</h1>
            <p><span className="font-bold">Area:</span> {strArea}</p>
            <p><span className="font-bold">Category:</span> {strCategory}</p>
            <div className="card-actions justify-center mt-5">
              <Link to={`/recipe/${idMeal}`}><button className="btn bg-emerald-500 text-white">See Details</button></Link>
            </div>
          </div>
          </div>
          {deletable && <div onClick={()=>handleDelete(idMeal)} className="absolute -top-5 -right-5 hover:bg-pink-600 bg-blue-600 p-2 rounded-full hover:scale-110"><MdDeleteForever size={25} /></div>}
        </div>
    );
};

export default RecipesCards;