import React from 'react';
import { GridLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(100vh-170px)]'>
            <GridLoader color="#36d7b7" size={15}  />
        </div>
    );
};

export default Loader;