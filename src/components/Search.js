// import React from 'react'

// function Search() {
//     return (
//         <>
//             <input type='text' placeholder='Search Places...' className='pl-8 text-xl placeholder:text-gray-600 placeholder:text-xl w-4/12 h-14 mt-8 border-gray-400 border-2 rounded-full cursor-pointer focus:border-orange-400 focus:outline-none ' ></input>
//         </>
//     )
// }

// export default Search



import React, { useState } from 'react';
import axios from 'axios';

function Search() {
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Function to handle input change
    const handleInputChange = (e) => {
        const inputText = e.target.value;
        setSearchText(inputText);

        // Fetch autocomplete suggestions from the Google Places API
        const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
        const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${inputText}&key=${apiKey}`;

        axios
            .get(apiUrl)
            .then((response) => {
                const predictions = response.data.predictions.map((prediction) => prediction.description);
                setSuggestions(predictions);
            })
            .catch((error) => {
                console.error('Error fetching suggestions:', error);
            });
    };

    // Function to handle suggestion selection
    const handleSuggestionClick = (suggestion) => {
        setSearchText(suggestion);
        setSuggestions([]); // Clear suggestions when a suggestion is clicked
    };

    return (
        <>
            <input
                type="text"
                placeholder='Search Places...'
                value={searchText}
                onChange={handleInputChange}
                className='pl-8 text-xl placeholder:text-gray-600 placeholder:text-xl w-4/12 h-14 border-gray-400 border-2 rounded-full cursor-pointer focus:border-orange-400 focus:outline-none'
            />
            {/* Display autocomplete suggestions */}
            <div>
                {suggestions.map((suggestion, index) => (
                    <div key={index} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Search;
