import React from 'react';
import { useLoaderData} from 'react-router-dom';
import ReactPlayer from 'react-player'


const SingleRecipeVideo = () => {
    const singleRecipe = useLoaderData();
     //console.log(singleRecipe);
     
     const recipe = singleRecipe.meals[0];
     const {strYoutube} = recipe;
        // console.log(strYoutube);
        // console.log(strTags);
    
    return (
        <div>
           <ReactPlayer className='container mx-auto mt-5' src={strYoutube} controls alt='Thumbnail' style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}/>

        </div>
       
      
    );
};

export default SingleRecipeVideo;