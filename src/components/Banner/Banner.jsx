import React from 'react';
import banner from '../../assets/banner.jpg';
const Banner = () => {
    return (
        <div>
            <img className=' w-full md:h-96' src={banner} alt="" />
        </div>
    );
};

export default Banner;