import React, { useEffect, useState } from 'react';
import Search from './Search';
import Pagination from './Pagination';
import GenderFilter from './GenderFilter';
import { Link, useSearchParams } from 'react-router-dom';

function ResultPage() {


    const [searchParams] = useSearchParams();
    const city = searchParams.get('city');
    console.log(city)

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGender, setSelectedGender] = useState('');


    useEffect(() => {
        // Fetch data from the API
        fetch(`https://randomuser.me/api/?page=${currentPage}&nat=in&results=20&inc=name,picture,location,gender,email,phone`)
            .then((response) => response.json())
            .then((data) => setUsers(data.results))
            .catch((error) => console.error(error));
    }, [currentPage]);



    const handleGenderChange = (event) => {
        const newGender = event.target.value;
        setSelectedGender(newGender);
        setCurrentPage(1)
    };

    const increment = () => {
        setCurrentPage(currentPage + 1);
    };

    const decrement = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1);
    }
    return (
        <div>
            <div className="mt-10 h-40 gap-5  flex justify-center items-center">
                <Search />
                <GenderFilter handleGenderChange={handleGenderChange} selectedGender={selectedGender} />
            </div>
            <div className="flex flex-wrap items-center justify-evenly m-2">
                {users
                    .filter(user => selectedGender === "" || user.gender === selectedGender)
                    .map((user, index) => (
                        <Link
                            key={index} // Add a unique key for each mapped Link
                            to={`/UserProfile/?name=${encodeURIComponent(user.name.first + ' ' + user.name.last)}&gender=${encodeURIComponent(user.gender)}&location=${encodeURIComponent(user.location.city + ', ' + user.location.state)}&email=${encodeURIComponent(user.email)}&phone=${encodeURIComponent(user.phone)}&picture=${encodeURIComponent(user.picture.large)}`}
                            className='w-5/12'
                        >
                            <UserCard
                                name={`${user.name.first} ${user.name.last}`}
                                location={`${user.location.city}, ${user.location.state}`}
                                profilePicture={user.picture.large}
                                gender={user.gender}
                            />
                        </Link>
                    ))}
            </div>
            <Pagination currentPage={currentPage} increment={increment} decrement={decrement} />
        </div >
    );
}

const UserCard = ({ name, location, profilePicture, gender, phone, email, picture }) => {
    return (

        <div className="flex w-full h-40 m-4 rounded-xl shadow-lg hover:cursor-pointer hover:scale-105 ease-out duration-300">
            <div className='h-40 w-40 rounded-l-xl flex items-center justify-center'>
                <img src={profilePicture} alt="Profile" />
            </div>
            <div className='m-4 text-neutral-700 '>
                <h5 className='text-gray font-semibold mb-1'>{name}<span className='ml-5 text-orange-400'>{gender}</span></h5>
                <h6>{location}</h6>
                <h6 className='mt-1 mb-1'>Looking for <span className='font-semibold'>Any</span> Roommate</h6>
                <h6>Rent: <span className='text-orange-400'>₹{Math.floor(Math.random() * (20000 - 4000 + 1)) + 4000}</span></h6>
            </div>
        </div>
    );
};

export default ResultPage;
