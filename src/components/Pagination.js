import React from 'react'

function Pagination({ currentPage, increment, decrement }) {
    return (
        <div className='flex justify-center mb-8 mt-8'>
            <div className='border-2 p-2 border-orange-400 text-orange-400 rounded-l-xl hover:text-white hover:bg-orange-400 cursor-pointer select-none transition duration-300 ease-in-out' onClick={decrement}>Previous</div>
            <div className='border-2 p-2 border-orange-400 text-orange-400 border-l-0 border-r-0 cursor-pointer'>{currentPage}</div>
            <div className='border-2 p-2 border-orange-400 text-orange-400 rounded-r-xl hover:text-white hover:bg-orange-400 cursor-pointer select-none transition duration-300 ease-in-out' onClick={increment}>Next</div>
        </div>
    )
}
// hover: bg - orange - 400 text - xl hover: text - white transition duration - 300 ease -in -out border - orange - 400 text - orange - 400 py - 2 px - 4 rounded user - select - none focus: outline - none

export default Pagination;