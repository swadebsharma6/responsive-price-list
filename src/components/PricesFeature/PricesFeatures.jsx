import React, { useEffect, useState } from 'react';
import SinglePrice from './SinglePrice';

const PricesFeatures = () => {
  const [prices, setPrices] = useState([]);
  useEffect(()=>{
    fetch('prices.json')
    .then(res => res.json())
    .then(data => setPrices(data))
  }, [])
    return (
        <section  className='mb-10' >
        <div className="hero mx-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)'}}>
        
        <div className=" p-10 ">
          <h2 className='text-4xl py-8 font-bold text-white'>Affordable Price Here</h2>

          <div className='grid md:grid-cols-3 gap-4 '>
            {
              prices.map(item => <SinglePrice
                key={item.id}
                item={item}
                ></SinglePrice>)
            }
          </div>
        </div>
      </div> 
        </section>
    );
};

export default PricesFeatures;