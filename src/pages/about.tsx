import React from "react";
import HeroImage from '../assets/images/about hero img.png';
import AboutImage from '../assets/images/about2.png';
import bg1 from '../assets/images/bg-about-1.png';
import bg2 from '../assets/images/bg-about_2.png';
import bg3 from '../assets/images/bg-about-3.png';
import why1 from '../assets/images/why1.png';
import why2 from '../assets/images/why2.png';
import why3 from '../assets/images/why3.png';
import why4 from '../assets/images/why4.png';
import Setup from '../assets/images/Group 7095.png';
import System from '../assets/images/Group 7096.png';
import Financing from '../assets/images/Group 7097.png';
import Users from '../assets/images/users.png';  
import Cpu from '../assets/images/cpu.png';
import Expert from '../assets/images/award.png';
import TeamMemberCard from "../components/team";
import imagePath from '../assets/images/image.png'; 
import background from '../assets/images/BG.png';
import ModelImage3 from '../assets/images/model_3.png'; 
import ModelImage4 from '../assets/images/model_4.png';

const teamMembers = [
    {
        name: 'Damilare',
        role: 'Co-Founder & CEO',
        photo: imagePath,
    },
    {
        name: 'Damilare',
        role: 'Co-Founder & CEO',
        photo: imagePath,
    },
    {
        name: 'Damilare',
        role: 'Co-Founder & CEO',
        photo: imagePath,
    },
    {
        name: 'Damilare',
        role: 'Co-Founder & CEO',
        photo: imagePath,
    },
    {
        name: 'Damilare',
        role: 'Co-Founder & CEO',
        photo: imagePath,
    },
];

const About: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center">
                <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div className="bg-black rounded-3xl p-2 text-white w-3/4 md:w-1/2 lg:w-1/4 mx-auto md:mx-0 text-center palmerlake text-xl md:text-2xl">
                        Thrive Library
                    </div>
                    <h1 className="text-4xl md:text-5xl text-blue-600 font-semibold heldanetext w-full md:w-[80%]">
                        Get to Know Us!
                    </h1>
                    <p className="text-gray-700 w-full md:w-[80%] text-base md:text-lg">
                        We partner in transforming educational outcomes through comprehensive school library solutions; with a deep commitment to enhancing learning experiences, we specialize in library setup, management, maintenance, and library development financing in K12 schools.
                    </p>
                </div>
                <img 
                    src={HeroImage} 
                    className="w-3/4 md:w-[45%] object-cover" 
                    alt="Library setup" 
                />
            </div>

            <div className="flex flex-col justify-center items-center mt-10 md:mt-20">
                <h1 className="heldanetext text-lg md:text-xl font-semibold">
                    What We Do
                </h1>
                <div className="mt-10 md:mt-20 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div 
                        className="flex flex-col space-y-4 p-6 rounded-3xl w-5/6 md:w-1/3 mx-auto"
                        style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >   
                        <img src={Setup} className="w-5 md:w-7"/>
                        <h1 className="text-left text-base md:text-lg text-black font-semibold heldanetext w-full">
                            School Library Setup, Management & Maintenance
                        </h1>
                    </div>
                    <div 
                        className="flex flex-col space-y-4 p-6 rounded-3xl w-5/6 md:w-1/3 mx-auto"
                        style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >   
                        <img src={System} className="w-5 md:w-7"/>
                        <h1 className="text-left text-base md:text-lg text-black font-semibold heldanetext w-full">
                            School Library Management System and E-Library
                        </h1>
                    </div>
                    <div 
                        className="flex flex-col space-y-4 p-6 rounded-3xl w-5/6 md:w-1/3 mx-auto"
                        style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >   
                        <img src={Financing} className="w-5 md:w-7"/>
                        <h1 className="text-left text-base md:text-lg text-black font-semibold heldanetext w-full">
                            School Library Development Financing
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-10 md:mt-20">
                <h1 className="heldanetext text-lg md:text-xl font-semibold text-center">
                    What We Do
                </h1>
                <div className="flex flex-col-reverse md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6 w-full max-w-7xl ">
                    <div className="grid grid-cols-2 gap-0 md:w-1/2 w-full mx-auto mt-4">
                        <div 
                            className="flex flex-col space-y-4 p-6 rounded-lg"
                            style={{ backgroundImage: `url(${why4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >   
                            <div className="flex flex-row items-center space-x-2">
                                <img src={Cpu} className="w-5 md:w-7" alt="Innovation Icon" />
                                <h1 className="text-left text-base md:text-lg text-black font-semibold heldanetext w-full">
                                    Innovation
                                </h1>
                            </div>
                            <p className="text-gray-700 w-full text-sm md:text-base">
                                We leverage cutting-edge technology and best practices to deliver impactful solutions.
                            </p>
                        </div>

                        <div 
                            className="flex flex-col space-y-4 p-6 rounded-lg"
                            style={{ backgroundImage: `url(${why2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >   
                            <div className="flex flex-row items-center space-x-2">
                                <img src={Expert} className="w-5 md:w-7" alt="Expertise Icon" />
                                <h1 className="text-left text-base md:text-lg text-black font-semibold heldanetext w-full">
                                    Expertise
                                </h1>
                            </div>
                            <p className="text-gray-700 w-full text-sm md:text-base">
                                Our team of library specialists brings years of experience and a passion for education to every project.
                            </p>
                        </div>

                        <div 
                            className="flex flex-col space-y-4 p-6 rounded-lg"
                            style={{ backgroundImage: `url(${why1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >   
                            <div className="flex flex-row items-center space-x-2">
                                <img src={Users} className="w-5 md:w-7" alt="Partnership Icon" />
                                <h1 className="text-left text-base md:text-lg text-black font-semibold heldanetext w-full">
                                    Partnership
                                </h1>
                            </div>
                            <p className="text-gray-700 w-full text-sm md:text-base">
                                We collaborate closely with schools to understand their unique challenges and goals, ensuring mutual success.
                            </p>
                        </div>

                        <div 
                            className="flex flex-col space-y-4 p-6 rounded-lg"
                            style={{ backgroundImage: `url(${why3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >   
                            <div className="flex flex-row items-center space-x-2">
                                <img src={Financing} className="w-5 md:w-7" alt="Impact Icon" />
                                <h1 className="text-left text-base md:text-lg text-black font-semibold heldanetext w-full">
                                    Impact
                                </h1>
                            </div>
                            <p className="text-gray-700 w-full text-sm md:text-base">
                                Enhancing library access and resources empowers students to reach their full potential and shape a brighter future.
                            </p>
                        </div>
                    </div>
                    <img src={AboutImage} className="w-1/2 md:w-[30%] lg:w-1/4 mx-auto" alt="About" />
                </div>
            </div>

            <div className="flex flex-col space-y-4 mt-10 md:mt-20">
                <h1 className="heldanetext text-lg md:text-xl font-semibold text-center">
                   Meet Our Team
                </h1>
                <p className="text-gray-700 w-full text-center mx-auto md:w-1/2 text-base md:text-lg">
                    Our team has a combined experience of 20 years in the library ecosystem and educational technology solution in Africa
                </p>
                <div className="md:flex grid grid-cols-2 gap-4 md:flex-row mt-4 md:space-x-2 mx-auto">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} name={member.name} role={member.role} photo={member.photo} />
                    ))}
                </div>
            </div>

            <div 
                className="relative flex items-center justify-center mt-10 md:mt-20 rounded-3xl p-10 w-full lg:w-[80%] mx-auto mb-10"
                style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="flex flex-col space-y-4 text-center md:text-left mr-10 md:mr-44">
                    <div className="text-white w-3/4 md:w-1/4 text-left palmerlake text-xl md:text-2xl">
                        join our team
                    </div>
                    <h1 className="text-left md:text-2xl text-white font-semibold heldanetext w-full lg:w-3/4">
                        JOIN US IN EMPOWERING EDUCATION
                    </h1>
                    <p className="text-white w-full text-left md:w-3/4 text-sm md:text-base">
                        Thrive Library is more than a service provider; we're your dedicated partner in educational excellence. Contact us today to learn how we can partner with your school to create a library experience that inspires, educates, and empowers the next generation of learners.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 text-sm md:text-base rounded-3xl w-3/4 md:w-1/2 lg:w-[30%]">
                        Connect with Us
                    </button>
                </div>
                <img 
                    src={ModelImage4} 
                    alt="Model 1" 
                    className="hidden lg:flex absolute w-1/5 lg:w-[23%] bottom-0 right-44"
                />
                <img 
                    src={ModelImage3} 
                    alt="Model 2" 
                    className="hidden lg:flex absolute w-1/5 lg:w-[30%] bottom-0 right-0"
                />
            </div>
        </div>
    );
}

export default About;