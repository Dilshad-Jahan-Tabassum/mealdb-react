import React from 'react';

const Heading = ({title,subtitle}) => {
    return (
        <div className='flex flex-col justify-center items-center my-12 '>
            <h1 className='text-4xl font-bold mb-4'>
                {title}
            </h1>
            <h3 className='text-xl text-gray-500'>
                {subtitle}
            </h3>
        </div>
    );
};

export default Heading;