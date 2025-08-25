import { Outlet } from 'react-router-dom';
import Hero from '../Components/Hero';
import Heading from '../Components/Heading';


const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <Heading 
        title="Welcome to MealDB" 
        subtitle="Discover Delicious Recipes">

        </Heading>

        <div role="tablist" className="tabs tabs-lift">
          <a role="tab" className="tab">Tab 1</a>
          <a role="tab" className="tab tab-active">Tab 2</a>
          <a role="tab" className="tab">Tab 3</a>
        </div>
    </div>
    
  );
};

export default Home;
