

const RecipesCards = ({recipeCard}) => {
  // console.log(recipeCard);
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={recipeCard.strMealThumb || recipeCard.strSource}
      alt= "food image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{recipeCard.strMeal}</h2>
    <p>{recipeCard.strInstructions}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default RecipesCards;