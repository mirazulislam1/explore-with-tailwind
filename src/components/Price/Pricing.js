import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name:'Free',Price: 0, features: [
            'Awesome features',
            'Extra features',
            'Unnecessary features',
            'Will never use features',
            'Simple features',
            'Best features'
        ]
    },
        {id: 2, name:'Medium',Price: 9.9, features: [
            'Everything on free',
            'Extra features',
            'Unnecessary features',
            'Will never use features',
            'Simple features',
            'Best features'
        ]},
        {id: 3, name:'Premium',Price: 19.9, features: [
            'Everything on premium',
            'Extra features',
            'Unnecessary features',
            'Will never use features',
            'Simple features',
            'Best features'
        ]}
    ]
    return (
        <div>
            <h2 className='text-5xl bg-indigo-400 text-white p-5'>Best deal of the town</h2>
         <div className='grid md:grid-cols-3 gap-3 mt-4'>
         {
            pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
         </div>
        </div>
    );
};

export default Pricing;