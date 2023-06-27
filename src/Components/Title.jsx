import React from 'react';

const Title = ({title}) => {
    return (
        <div className='text-center mx-auto mt-20 mb-10'>
            <h1 className='text-5xl pb-5 font-bold uppercase'>{title}</h1>
        </div>
    );
};

export default Title;