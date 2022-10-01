import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-400 m-3 rounded-md p-3'>
        <div>
            <h3>
            <span className='text-6xl font-semibold text-white'>{option.Price}</span>
            <span className='text-2xl text-gray-200'>/mon</span>
            </h3>
            <p className='text-3xl my-4'>{option.name}</p>
        </div>
           {
            features.map((feature, idx)=> <Feature key={feature.idx} feature={feature}></Feature>)
           }
           <button className='bg-green-500 w-full mt-4 rounded py-2 text-white font-bold'>Buy now</button>
        </div>
        
    );
};

export default PriceOption;