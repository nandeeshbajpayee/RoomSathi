import React from 'react';

function GenderFilter({ handleGenderChange, selectedGender }) {
    return (
        <div className=" flex  items-center justify-center gap-2">
            <label htmlFor="genderFilter" className="block text-sm whitespace-nowrap font-medium text-neutral-700">
                Gender Filter:
            </label>
            <select
                id="genderFilter"
                value={selectedGender}
                onChange={handleGenderChange}
                className="mt-1 block w-full px-2 pb-1 border rounded-md shadow-sm focus:outline-none focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 text-orange-400">
                <option value="">Any</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
    );
}

export default GenderFilter;
