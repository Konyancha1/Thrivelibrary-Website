import React from "react";
import HeroImage1 from '../assets/images/Ellipse 128.png';
import HeroImage2 from '../assets/images/Ellipse 129.png';
import HeroImage3 from '../assets/images/Ellipse 130.png';
import HeroImage4 from '../assets/images/Ellipse 131.png';
import HeroImage5 from '../assets/images/Ellipse 132.png';
import SearchBar from '../components/searchBar';
import { SearchQuery } from '../types'; 

const Careers: React.FC = () => {
    const handleSearch = (query: SearchQuery) => {
        console.log(query);
    };

    const jobOpenings: any[] = [];

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center">
                <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div className="bg-black rounded-3xl p-2 text-white w-3/4 md:w-1/2 lg:w-1/4 mx-auto md:mx-0 text-center palmerlake text-xl md:text-2xl">
                        Join us
                    </div>
                    <h1 className="text-4xl md:text-5xl text-blue-600 font-semibold heldanetext w-full md:w-[80%]">
                        Ready to kickstart your journey with Thrivelibrary? Come join us.
                    </h1>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-row items-center justify-center space-x-16 md:space-x-32">
                        <img src={HeroImage1} className="w-24 h-24 md:w-32 md:h-32 object-cover" alt="Image 1" />
                        <img src={HeroImage2} className="w-24 h-24 md:w-32 md:h-32 object-cover" alt="Image 2" />
                    </div>
                    <img src={HeroImage3} className="w-32 h-32 object-cover my-4" alt="Image 3" />
                    <div className="flex flex-row items-center justify-center space-x-16 md:space-x-32">
                        <img src={HeroImage4} className="w-24 h-24 md:w-32 md:h-32 object-cover" alt="Image 4" />
                        <img src={HeroImage5} className="w-24 h-24 md:w-32 md:h-32 object-cover" alt="Image 5" />
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-gray-100 rounded-lg p-4">
                <SearchBar onSearch={handleSearch} />
                <h1 className="mt-6 text-left md:text-right heldanetext text-gray-500 text-base md:text-xl">Job Openings Available</h1>
                {jobOpenings.length === 0 ? (
                    <p className="text-gray-500 text-center heldanetext text-base md:text-xl mt-6">Currently, there are no job openings available.</p>
                ) : (
                    <ul>
                        {jobOpenings.map((job) => (
                            <li key={job.id}>{job.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Careers;