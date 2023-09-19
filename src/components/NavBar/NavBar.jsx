import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Link from '../Link/Link';

const NavBar = () => {
    const [open , setOpen] = useState(false);
    
        const menuRoutes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Portfolio', path: '/portfolio' },
        { id: 5, name: 'Contact', path: '/contact' },
      ];
    return (
        <section className='bg-orange-400 p-6 rounded'>
         <div className='md:hidden'  onClick={()=> setOpen(!open)}>
          <span>
          {open === true ?
             <XMarkIcon className="h-10 w-10 text-blue-500" />
           : <Bars3Icon className="h-10 w-10 text-blue-500" />
        }
        </span>
        </div>
        
        <nav >
         <div className={`md:flex absolute md:static duration-500 justify-between  items-center ${open ? 'top-24' : '-top-48'}`}>
         <h3 className='md:text-5xl text-xl font-bold text-orange-800 '>Learn React</h3>

            <div className='md:flex '>

            {
                menuRoutes.map(route => <Link
                    key={route.id}
                    route={route}
                    ></Link> )
            }
         </div>  
         </div> 
        </nav>
        </section>
       
    );
};

export default NavBar;