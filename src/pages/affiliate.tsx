import React from "react";
import bg1 from '../assets/images/bg-about-1.png';
import bg2 from '../assets/images/bg-about_2.png';
import bg3 from '../assets/images/bg-about-3.png';
import Setup from '../assets/images/user-check.png';
import System from '../assets/images/Vector.png';
import Financing from '../assets/images/money.png';

const Affiliate: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-10 md:space-y-0 mb-6">
                <div className="flex flex-col mt-4 md:w-1/2">
                    <div className="flex flex-col text-center md:text-left">
                        <div className="bg-black rounded-3xl p-2 text-white w-3/4 md:w-1/2 lg:w-1/4 mx-auto md:mx-0 text-center palmerlake text-xl md:text-2xl">
                            Join Us
                        </div>
                        <h1 className="text-4xl mt-4 md:text-5xl text-blue-600 font-semibold heldanetext w-full md:w-[80%]">
                            Join our Affiliate Program
                        </h1>
                        <p className="text-gray-700 mt-4 w-full md:w-[80%] text-base md:text-lg">
                            As a Thrive Library Affiliate, you join our broader team in reaching more schools and offering our comprehensive school library solutions.
                        </p>
                        <div className="mt-10 text-center md:text-left palmerlake text-2xl md:text-3xl text-blue-500">
                            How it works
                        </div>
                        <h3 className="text-xl mt-1 md:text-3xl text-black font-semibold heldanetext w-full md:w-[80%]">
                            Simple Steps to Work with Us
                        </h3>
                    </div>
                    <div className="mt-5 md:mt-10 flex flex-col space-y-4">
                        <div
                            className="flex flex-col space-y-4 p-6 rounded-3xl w-3/4 mx-auto md:mx-0"
                            style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <div className="flex items-center space-x-2">
                                <img src={System} className="w-3 md:w-5" alt="School Library Setup" />
                                <h1 className="text-left text-base md:text-lg text-black font-semibold heldanetext">
                                    Apply
                                </h1>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base">
                                Fill the become an affiliate form, after which you would be contacted for training, if approved.
                            </p>
                        </div>
                        <div
                            className="flex flex-col space-y-4 p-6 rounded-3xl w-3/4 mx-auto md:mx-0"
                            style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <div className="flex items-center space-x-2">
                                <img src={Setup} className="w-5 md:w-7" alt="Library System" />
                                <h1 className="text-left text-base md:text-lg text-black font-semibold heldanetext">
                                    Onboard School Library
                                </h1>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base">
                                Engagement with our broader team to connect with more schools.
                            </p>
                        </div>
                        <div
                            className="flex flex-col space-y-4 p-6 rounded-3xl w-3/4 mx-auto md:mx-0"
                            style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <div className="flex items-center space-x-2">
                                <img src={Financing} className="w-5 md:w-7" alt="Library Financing" />
                                <h1 className="text-left text-base md:text-lg text-black font-semibold heldanetext">
                                    Get Paid
                                </h1>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base">
                                On each successful onboarding, you get paid a commission.
                            </p>
                        </div>
                    </div>
                </div>

                <form className="w-full md:w-1/2 h-1/2 bg-white p-6 shadow-2xl flex flex-col space-y-4 rounded-3xl">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-1">
                            <label className="block text-gray-700">Full Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700">Phone</label>
                            <input
                                type="tel"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Phone Number"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Email"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-1">
                            <label className="block text-gray-700">Country</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Country"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700">Profession</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Profession"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700">LinkedIn URL</label>
                        <input
                            type="url"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="LinkedIn Profile URL"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Why do you want to become an affiliate</label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Kindly tell us why you want to become an affiliate."
                            rows={4}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Affiliate;