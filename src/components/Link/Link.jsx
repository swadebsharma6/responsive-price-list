import React from 'react';

const Link = ({route}) => {
    return (
        <div className=''>
            <p className='mr-20 text-xl hover:text-red-500' ><a href={route.path}>{route.name}</a></p>
        </div>
    );
};

export default Link;