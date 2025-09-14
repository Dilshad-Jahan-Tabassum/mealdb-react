

const RecipesCards = ({recipeCard}) => {
  // console.log(recipeCard);
  const {strMealThumb, strSource, strMeal,strArea, strCategory} = recipeCard;
    return (
        <div className="card bg-base-100 w-90 shadow-lg border border-gray-400 p-5 transition-transform hover:scale-105">
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
      <button className="btn bg-emerald-500 text-white">See Details</button>
    </div>
  </div>
</div>
    );
};

export default RecipesCards;