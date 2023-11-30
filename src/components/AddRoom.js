import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LuUpload } from "react-icons/lu";

const AddRoom = () => {
    const [roomDetails, setRoomDetails] = useState({
        location: '',
        genderPreference: '',
        rent: '',
        occupancy: '',
        amenities: [],
        images: [],
        description: '',
        preferences: [],
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRoomDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleImageUpload = (event) => {
        const uploadedImages = Array.from(event.target.files);
        setRoomDetails((prevDetails) => ({
            ...prevDetails,
            images: [...prevDetails.images, ...uploadedImages],
        }));
    };

    const handleDescriptionChange = (event) => {
        const newDescription = event.target.value;
        setRoomDetails((prevDetails) => ({
            ...prevDetails,
            description: newDescription,
        }));
    };

    const handleAmenitiesChange = (event) => {
        const selectedAmenities = Array.from(event.target.selectedOptions, (option) => option.value);
        setRoomDetails((prevDetails) => ({
            ...prevDetails,
            amenities: selectedAmenities,
        }));
    };

    const handlePreferencesChange = (event) => {
        const selectedPreferences = Array.from(event.target.selectedOptions, (option) => option.value);
        setRoomDetails((prevDetails) => ({
            ...prevDetails,
            preferences: selectedPreferences,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Room Details Submitted:', roomDetails);
        // Add logic to send data to server or perform other actions
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (<div className="container mx-auto p-6 text-neutral-700">
        <h1 className="text-3xl font-bold text-center mb-8">Add Room</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Location:</label>
                <input
                    type="text"
                    name="location"
                    value={roomDetails.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Gender Preference:</label>
                <select
                    name="genderPreference"
                    value={roomDetails.genderPreference}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                >
                    <option value="any">Any</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>

                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Rent:</label>
                <input
                    type="text"
                    name="rent"
                    value={roomDetails.rent}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Occupancy:</label>
                <select
                    name="occupancy"
                    value={roomDetails.occupancy}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                >
                    <option value="any">Any</option>
                    <option value="single">Single</option>
                    <option value="shared">Shared</option>

                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Amenities:</label>
                <select
                    multiple
                    name="amenities"
                    value={roomDetails.amenities}
                    onChange={handleAmenitiesChange}
                    className="w-full px-3 py-2 border rounded"
                >
                    <option value="wifi">WiFi</option>
                    <option value="kitchen">Kitchen</option>
                    {/* Add more amenity options as needed */}
                </select>
            </div>
            <div className="mb-4 ">
                <label className="block text-sm font-bold mb-2">Description:</label>
                <textarea
                    name="description"
                    value={roomDetails.description}
                    onChange={handleDescriptionChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            {/* Room Photos Section */}
            {/* <div className="col-span-2 mb-4">
                <label className="block text-sm font-bold mb-2">Room Photos:</label>
                <img
                    src={roomDetails.images.length > 0 ? URL.createObjectURL(roomDetails.images[0]) : 'https://via.placeholder.com/400'}
                    alt="Room Placeholder"
                    className="w-64 h-64 object-cover rounded mb-2"
                />

                <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full" />
                <p className="text-sm text-gray-500 mt-2">
                    Upload multiple photos of the room. You can add different angles and views.
                </p>
            </div> */}
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Room Photos:</label>
                <Slider {...settings}>
                    {roomDetails.images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={URL.createObjectURL(image)}
                                alt={`Room Photo ${index + 1}`}
                                className="w-64 h-64 object-cover rounded mb-2"
                            />
                        </div>
                    ))}
                </Slider>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full" />


                <p className="text-sm text-gray-500 mt-2">
                    Upload multiple photos of the room. You can add different angles and views.
                </p>
            </div>


            <div className="col-span-2 mb-4">
                <label className="block text-sm font-bold mb-2">Preferences:</label>
                <select
                    multiple
                    name="preferences"
                    value={roomDetails.preferences}
                    onChange={handlePreferencesChange}
                    className="w-full px-3 py-2 border rounded"
                >
                    <option value="smoking">Smoking</option>
                    <option value="alcoholic">Alcoholic</option>
                    <option value="veg">Vegetarian</option>
                    <option value="non-veg">Non-Vegetarian</option>
                    <option value="night-owl">Night Owl</option>
                    <option value="early-bird">Early Bird</option>
                    {/* Add more preference options as needed */}
                </select>
            </div>
            <div className="col-span-2 mb-4">
                <label className="block text-sm font-bold mb-2">Description:</label>
                <textarea
                    name="description"
                    value={roomDetails.description}
                    onChange={handleDescriptionChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>

            <div className="col-span-2 text-center">
                <button className='mx-10 text-xl text-orange-400 border-2 border-orange-400 transition duration-300 ease-in-out hover:text-white hover:bg-orange-400 hover:cursor-pointer p-2 rounded-md '>Save Changes</button>
            </div>

        </form>
    </div>
    );
};

export default AddRoom;
