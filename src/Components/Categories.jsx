import { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories}) => {
  const [selectCategory, setSelectedCategory] = useState(false);
  // const {idCategory, strCategory, strCategoryThumb} = categories;
    return (
 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 container mx-auto px-4'>
        
          {
            categories.map(category=>(
             
             <div key={category.idCategory} className="card card-side bg-cyan-900 shadow-lg shadow-cyan-500 flex gap-5 items-center transition-transform hover:scale-105 hover:cursor-pointer p-1">
               <figure className='w-1/2  h-full lg:px-3'>
                <img
                className='rounded-full border-2 border-cyan-300 w-28 h-28 md:w-37 md:h-37 lg:w-46 lg:h-46 '
                  src={category.strCategoryThumb}
                  alt="category image not available"/>
              </figure>
              <div className="card-body items-center w-1/2" >
                <h2 className="card-title text-white mb-5 text-sm">{category.strCategory}</h2>
                <button className="btn" onClick={()=>setSelectedCategory(category)}>About {category.strCategory}</button>
              </div>
              
             </div>
             
         
            )
            )
          }
          {selectCategory && (<dialog open className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-cyan-900 text-white">
                      <figure className='w-1/2 mx-auto'>
                        <img
                          className='w-40 h-40 md:w-48 md:h-48 lg:w-58 lg:h-58 rounded-full border-3 border-emerald-600 object-cover'
                          src={selectCategory.strCategoryThumb}
                          alt="category image not available"/>
                      </figure>
                      <h3 className="font-bold text-lg mt-8">{selectCategory.strCategory}</h3>
                      <p className=" py-2 ">{selectCategory.strCategoryDescription}</p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button onClick={()=> setSelectedCategory(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                      </div>
                    </div>
                  </dialog>)}
      </div>  
    
    );
};

export default Categories;