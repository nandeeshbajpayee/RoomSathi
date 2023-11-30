import React from 'react';
import { Link } from 'react-router-dom';

function PopularCities() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-3xl font-semibold text-neutral-700'>
                Find your Sathi in <span className='text-orange-400'>Popular Cities</span>
            </h1>
            <div className='flex justify-evenly items-center mt-32 w-full'>
                <Link to={`/result/?city=Banglore`
                }>
                    <div className='hover:cursor-pointer hover:scale-110 ease-out duration-300 w-40 flex flex-col justify-center items-center text-xl font-semibold'>
                        <img src='https://cdn.iconscout.com/wordpress/2017/04/gatewayofindia-gate-way-india-mumbai-heritage-sites-india-942x700.png' alt='city' />
                        <h5 className='mt-3 text-neutral-700'>Bangalore</h5>
                    </div>
                </Link>
                <Link to={`/result/?city=Delhi`}>
                    <div className='hover:cursor-pointer hover:scale-110 ease-out duration-300 w-40 flex flex-col justify-center items-center text-xl font-semibold'>
                        <img src='https://static.vecteezy.com/system/resources/previews/016/591/174/non_2x/world-famous-building-india-gate-delhi-vector.jpg' alt='city' />
                        <h5 className='mt-3 text-neutral-700'>Delhi</h5>
                    </div>
                </Link>
                <Link to={`/result/?city=Pune`}>
                    <div className='hover:cursor-pointer hover:scale-110 ease-out duration-300 w-40 flex flex-col justify-center items-center text-xl font-semibold'>
                        <img src='https://thumbs.dreamstime.com/b/pune-skyline-trendy-vector-illustration-linear-detailed-silhouette-style-57930323.jpg' alt='city' className='max-w-full max-h-full rounded-xl' />
                        <h5 className='mt-3 text-neutral-700'>Pune</h5>
                    </div>
                </Link>
                <Link to={`/result/?city=Mumbai`}>
                    <div className='hover:cursor-pointer hover:scale-110 ease-out duration-300 w-40 flex flex-col justify-center items-center text-xl font-semibold'>
                        <img src='https://cdn.iconscout.com/wordpress/2017/04/gatewayofindia-gate-way-india-mumbai-heritage-sites-india-942x700.png' alt='city' />
                        <h5 className='mt-3 text-neutral-700'>Mumbai</h5>
                    </div>
                </Link>
            </div>
        </div >
    );
}

export default PopularCities;
