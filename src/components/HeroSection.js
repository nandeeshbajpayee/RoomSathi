import React from 'react';
import Search from './Search';
function HeroSection() {
    return (
        <div className=' flex flex-col justify-center items-center h-screen'>
            <h1 className='text-3xl font-semibold text-center text-neutral-700'>
                "Roomsathi: Your Homecoming in New Cities – <br />Find Your <span className='text-orange-400'>Perfect Roommate</span> Hassle-Free!"
            </h1>
            <p className='text-neutral-700 mt-3 text-xl'>Explore Cities, Connect with Like-Minded People</p>
            {/* <input type='text' placeholder='Search Places...' className='pl-8 text-xl placeholder:text-gray-600 placeholder:text-xl w-4/12 h-14 mt-8 border-gray-400 border-2 rounded-full cursor-pointer focus:border-orange-400 focus:outline-none ' ></input> */}
            <Search />
        </div>
    );
}

export default HeroSection;
