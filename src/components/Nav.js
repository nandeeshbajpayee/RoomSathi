// import React from 'react'
// import UserImage from './images/User.png';

// function Nav() {
//     return (
//         <div className='flex w-full h-20 bg-slate-50 items-center pl-4 drop-shadow-md relative'>
//             <div className='ml-5 text-2xl pl-4 hover:cursor-pointer'><span className='text-neutral-700'>Room</span><span className='text-orange-400'>Sathi</span></div>
//             <div className='absolute right-8 flex items-center'>
//                 <div className='mx-10 text-xl text-orange-400 transition duration-300 ease-in-out hover:text-white hover:bg-orange-400 hover:cursor-pointer p-2 rounded-md '>Add Room</div>
//                 <div className='text-xl mr-8 text-neutral-700 hover:cursor-pointer'>log in <span className='text-orange-400 text-2xl px-1'>/</span>sign up</div>
//                 <div className='mr-4 flex items-center justify-center border-r-7 w-8 h-8 rounded-full hover:cursor-pointer'><img src={UserImage} alt="User" /></div>
//             </div>
//         </div >
//     )
// }

// export default Nav
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import UserImage from './images/User.png';

function Nav() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className=' flex w-full h-20 bg-slate-50 items-center pl-4 drop-shadow-md fixed top-0 z-10'>
            <div className='ml-5 text-2xl pl-4 hover:cursor-pointer'>
                <Link to="/">
                    <span className='text-neutral-700'>Room</span>
                    <span className='text-orange-400'>Sathi</span>
                </Link>
            </div>
            <div className='absolute right-8 flex items-center'>
                <div
                    className='mx-10 text-xl text-orange-400 transition duration-300 ease-in-out hover:text-white hover:bg-orange-400 hover:cursor-pointer p-2 rounded-md '
                >
                    <Link to="/addroom">
                        Add Room
                    </Link>
                </div>
                <div>
                    <Link to="/login" className='text-xl mr-8 text-neutral-700 hover:cursor-pointer'>
                        Login <span className='text-orange-400 text-2xl px-1'>/</span> Register
                    </Link>
                </div>

                <div
                    className='mr-4 flex items-center justify-center border-r-7 w-8 h-8 rounded-full hover:cursor-pointer'
                    onClick={toggleDropdown}
                >
                    <img src={UserImage} alt='User' />
                </div>
                {isDropdownOpen && (
                    <div className='absolute top-16 right-0 bg-white shadow-md rounded-md w-40'>
                        {/* Dropdown content goes here */}
                        <div className='p-2  hover:text-orange-400 cursor-pointer '>
                            <Link to="/profile" > Profile</Link>
                        </div>
                        <div className='p-2  hover:text-orange-400 cursor-pointer '>
                            Notifications
                        </div>
                        <div className='p-2 hover:text-orange-400 cursor-pointer'>
                            Settings
                        </div>
                        <div className='p-2  hover:text-orange-400  cursor-pointer'>
                            Sign Out
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Nav;
