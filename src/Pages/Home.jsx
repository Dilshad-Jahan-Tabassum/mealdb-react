import { useLoaderData } from 'react-router-dom';
import Hero from '../Components/Hero';
import Heading from '../Components/Heading';
import Categories from '../Components/Categories';


const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
  
  return (
    <div>
      {/* Banner  */}
        <Hero></Hero>

      {/* Heading Section   */}
        <Heading 
        title="Welcome to MealDB" 
        subtitle="Discover all categories of meals from around the world!">

        </Heading>

    {/* Tabs section  */}
        <Categories categories={categories.categories}></Categories>
    </div>
    
  );
};

export default Home;
