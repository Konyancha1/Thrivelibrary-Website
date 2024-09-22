import { useState } from "react";
import { SearchQuery } from "../types"; 
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const SearchBar: React.FC<{ onSearch: (query: SearchQuery) => void }> = ({ onSearch }) => {
    const [query, setQuery] = useState<SearchQuery>({ jobTitle: '', department: '', location: '' });

    const handleSearch = (updatedQuery: SearchQuery) => {
        setQuery(updatedQuery);
        onSearch(updatedQuery); // Call onSearch whenever the query changes
    };

    return (
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4">
            <div className="flex flex-row w-full md:w-1/3">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Job Title"
                    value={query.jobTitle}
                    onChange={(e) => handleSearch({ ...query, jobTitle: e.target.value })} 
                />
                <button
                    className="text-blue-600 focus:outline-none relative right-8" 
                    onClick={() => handleSearch(query)} 
                >
                    <FaSearch />
                </button>
            </div>
            <select
                className="w-full md:w-1/3 p-1 border border-gray-300 rounded-lg focus:outline-none"
                value={query.department}
                onChange={(e) => handleSearch({ ...query, department: e.target.value })}
            >
                <option value="">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
            </select>
            <select
                className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none"
                value={query.location}
                onChange={(e) => handleSearch({ ...query, location: e.target.value })}
            >
                <option value="">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="Rwanda">Rwanda</option>
            </select>
        </div>
    );
};

export default SearchBar;