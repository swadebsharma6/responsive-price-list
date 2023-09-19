import React from 'react';

const SinglePrice = ({item}) => {
    console.log(item)
    const {features} = item;
    return (
        <div className="card m-4 glass">
  <div className="card-body">
    <h2 className="card-title text-4xl font-bold"> ${item.monthlyFee} <span className='text-sm'>/mon</span></h2>
    <h2 className="card-title">{item.name}</h2>
    <p>How to park your car at your garage?</p>

    <h2 className='text-2xl font-bold text-white py-4'>Features:</h2>
    {
        features.map((feature ,idx)=> <p key={idx} className='text-xl'>{idx+1}. {feature}</p>)
    }
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default SinglePrice;