import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div role="tablist" className="tabs tabs-lift flex justify-center my-10">
          {
            categories.map(category=>(
              <Link to='/browse-recipes' key={category.idCategory} role="tab" className="tab">{category.strCategory}</Link>
            )
            )
          }
          
        </div>
    );
};

export default Categories;