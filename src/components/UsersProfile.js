// src/UserProfile.js
import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
// import UserImage from './images/User.png';
import { useSearchParams } from 'react-router-dom';
const UserProfile = () => {


    const [searchParams] = useSearchParams();

    // Access individual query parameters
    const name = searchParams.get('name');
    const gender = searchParams.get('gender');
    const location = searchParams.get('location');
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');
    const picture = searchParams.get('picture');

    return (
        <div className="container mx-auto p-6 text-neutral-700">
            <div className="mb-8">
                {/* Profile Picture */}
                <img
                    src={picture}
                    alt="Profile"
                    className="w-40 h-40 object-cover rounded-full  mx-auto mb-4 "
                />
                {/* Name */}
                <h2 className="text-3xl font-bold text-center mb-2">{name}</h2>
                {/* Location Address */}
                <p className="text-gray-600 text-center">{location}</p>
                {/* Contact Information */}
                <div className="m-6 flex flex-col justify-center items-center">
                    <div>
                        <p className="text-gray-600 flex items-center m-2">
                            <FaEnvelope className="m-2 hover:text-neutral-700  text-orange-400 text-2xl hover:cursor-pointer hover:scale-110 ease-out duration-100" />{email}
                        </p>
                        <p className="text-gray-600 flex items-center m-2">
                            <FaPhoneAlt className=" m-2 hover:text-neutral-700 text-orange-400 text-2xl hover:cursor-pointer hover:scale-110 ease-out duration-100" />{phone}
                        </p>
                    </div>
                </div>
            </div>


            {/* Basic Info, Amenities, and Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Basic Info</h2>
                    <p className="text-gray-600">
                        Gender: {gender} <br />
                        Rent: $800/month <br />
                        Looking For: Roommate <br />
                        Occupancy: 1 person
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Amenities</h2>
                    <p className="text-gray-600">
                        WiFi, Kitchen, Laundry, Parking, etc.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Preferences</h2>
                    <p className="text-gray-600">
                        Non-smoker, Clean and Tidy, etc.
                    </p>
                </div>
            </div>



            {/* Room Photos and Description */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Room Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Room Photos */}
                    <div>
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Room"
                            className="w-full h-64 object-cover rounded mb-4"
                        />
                        {/* Add more photos as needed */}
                    </div>
                    {/* Room Description */}
                    <div>
                        <p className="text-gray-600">
                            Spacious room with natural light, fully furnished. <br />
                            Close to public transportation and shopping centers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
