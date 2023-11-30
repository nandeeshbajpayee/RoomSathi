// import React, { useState } from 'react';
// import UserImage from './images/User.png';

// const Go = () => {
//     const [user, setUser] = useState({
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 25,
//         phoneNumber: '123-456-7890',
//         gender: 'Male',
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUser({
//             ...user,
//             [name]: value,
//         });
//     };

//     return (
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg m-8">
//             <h2 className="text-3xl font-semibold text-gray-800 mb-6">User Profile</h2>
//             <div className='grid grid-cols-2 gap-6'>
//                 <div className='p-4'>
//                     <div className='text-center'>
//                         <img
//                             src={UserImage}
//                             alt="pic"
//                             className="w-32 h-32 bg-gray-200 border border-gray-400 rounded-full mx-auto mb-4"
//                         />
//                         <label className="text-gray-600">Upload Photo</label>
//                         <input type="file" className="block w-full p-2 mt-2 rounded-md" accept="image/*" />
//                     </div>
//                 </div>
//                 <div className='p-4'>
//                     <label className="text-gray-600 block mb-2">First Name</label>
//                     <input
//                         type="text"
//                         name="firstName"
//                         value={user.firstName}
//                         onChange={handleInputChange}
//                         className="bg-gray-200 p-3 rounded-md w-full"
//                     />
//                 </div>
//                 <div className='p-4'>
//                     <label className="text-gray-600 block mb-2">Last Name</label>
//                     <input
//                         type="text"
//                         name="lastName"
//                         value={user.lastName}
//                         onChange={handleInputChange}
//                         className="bg-gray-200 p-3 rounded-md w-full"
//                     />
//                 </div>
//                 <div className='p-4'>
//                     <label className="text-gray-600 block mb-2">Phone Number</label>
//                     <input
//                         type="tel"
//                         name="phoneNumber"
//                         value={user.phoneNumber}
//                         onChange={handleInputChange}
//                         className="bg-gray-200 p-3 rounded-md w-full"
//                     />
//                 </div>
//                 <div className='p-4'>
//                     <label className="text-gray-600 block mb-2">Gender</label>
//                     <div className='flex items-center space-x-4'>
//                         <label className='flex items-center space-x-2'>
//                             <input
//                                 type="radio"
//                                 name="gender"
//                                 value="Male"
//                                 checked={user.gender === 'Male'}
//                                 onChange={handleInputChange}
//                                 className="h-4 w-4 border border-gray-400 rounded-full focus:ring-2 focus:ring-blue-500"
//                             />
//                             <span className='text-gray-800'>Male</span>
//                         </label>
//                         <label className='flex items-center space-x-2'>
//                             <input
//                                 type="radio"
//                                 name="gender"
//                                 value="Female"
//                                 checked={user.gender === 'Female'}
//                                 onChange={handleInputChange}
//                                 className="h-4 w-4 border border-gray-400 rounded-full focus:ring-2 focus:ring-blue-500"
//                             />
//                             <span className='text-gray-800'>Female</span>
//                         </label>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Go;










import React, { useState } from 'react';
import UserImage from './images/User.png';

function Go() {
    const [userInfo, setUserInfo] = useState({
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '123-456-7890',
        gender: 'Male',
    });

    const [profilePicture, setProfilePicture] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePicture(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 my-5 p-6 bg-white rounded-lg shadow-md">
            <div className="text-center">
                <label className="cursor-pointer">
                    <img
                        src={profilePicture || UserImage}
                        alt="Profile"
                        className="w-32 h-32 mx-auto rounded-full"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>
            </div>
            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-600">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={userInfo.phoneNumber}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Gender</label>
                <select
                    name="gender"
                    value={userInfo.gender}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:ring focus:ring-blue-200"
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="mt-6 text-center">
                <button className='mx-10 text-xl text-orange-400 transition duration-300 ease-in-out hover:text-white hover:bg-orange-400 hover:cursor-pointer p-2 rounded-md '>Save Changes</button>
            </div>
        </div>
    );
}

export default Go;
