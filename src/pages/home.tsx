import React from "react";
import HeroImage from '../assets/images/Hero Image.png'; 
import Card from "../components/card";
import Solutions from '../assets/images/check.png';
import Customized from '../assets/images/settings.png';
import Tailored from '../assets/images/sliders.png';
import Money from '../assets/images/Monthly Salary.png';
import PieChart from '../assets/images/pie-chart.png';
import Support from '../assets/images/award.png';
import Monitor from '../assets/images/monitor.png';
import Reading from '../assets/images/book-open.png';
import ModelImage1 from '../assets/images/model_1.png'; 
import ModelImage2 from '../assets/images/model_2.png';
import background from '../assets/images/BG.png';
import background2 from '../assets/images/Mask group.png';

const Home: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center">
                <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div className="bg-black rounded-3xl p-2 text-white w-3/4 md:w-1/2 lg:w-1/4 mx-auto md:mx-0 text-center palmerlake text-xl md:text-2xl">
                        FOR SCHOOL LIBRARIES
                    </div>
                    <h1 className="text-4xl md:text-5xl text-blue-600 font-semibold heldanetext w-full md:w-[80%]">
                        Library Set-Up, Management, and Maintenance
                    </h1>
                    <p className="text-gray-700 w-full md:w-[80%] text-base md:text-lg">
                        We specialize in providing comprehensive solutions for school library setup, management, and maintenance, focusing on improving the reading culture in schools.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-3xl w-3/4 md:w-1/2 lg:w-1/4 mx-auto md:mx-0">
                        Connect With Us
                    </button>
                </div>
                <img 
                    src={HeroImage} 
                    className="w-3/4 md:w-[45%] object-cover" 
                    alt="Library setup" 
                />
            </div>

            <div className="flex flex-col justify-center items-center mt-10 md:mt-20">
                <h1 className="heldanetext text-lg md:text-xl font-semibold">
                    Why Choose Thrive Library?
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <Card 
                        icon={<img src={Solutions} className="w-5 md:w-7"/>}
                        header="Comprehensive Solutions"
                        text="All-in-one service for setting up, managing, and maintaining school libraries."
                    />
                    <Card 
                        icon={<img src={Money} className="w-5 md:w-7"/>}
                        header="Library Development Financing"
                        text="Enhance school library facilities and resources without financial strain."
                    />
                    <Card 
                        icon={<img src={Customized} className="w-5 md:w-7"/>}
                        header="Expert Management and Maintenance"
                        text="Keep school libraries up-to-date, well-organized, and conducive for learning."
                    />
                    <Card 
                        icon={<img src={Tailored} className="w-5 md:w-7"/>}
                        header="Tailored Solutions"
                        text="Customized school library setups and management plans to meet the unique needs of your school."
                    />
                    <Card 
                        icon={<img src={Reading} className="w-5 md:w-7"/>}
                        header="Improving Reading Culture"
                        text="Foster a love for reading and learning with well-managed, resource-rich school libraries."
                    />
                    <Card 
                        icon={<img src={Monitor} className="w-5 md:w-7"/>}
                        header="Access to Modern Technology"
                        text="Equip school libraries with the latest tools and resources to enhance the learning experience."
                    />
                    <Card 
                        icon={<img src={Support} className="w-5 md:w-7"/>}
                        header="Professional Training and Support"
                        text="Ensure school library staff are well-equipped to manage and maintain the library efficiently."
                    />
                    <Card 
                        icon={<img src={PieChart} className="w-5 md:w-7"/>}
                        header="Resource Optimization"
                        text="Effectively utilize books, digital media, and other materials to support students' academic growth."
                    />
                </div>
            </div>

            <div 
                className="relative flex items-center justify-center mt-10 md:mt-20 rounded-3xl p-10 w-full lg:w-[80%] mx-auto"
                style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="flex flex-col space-y-4 text-center md:text-left mr-10 md:mr-44">
                    <div className="text-white w-3/4 md:w-1/4 text-left palmerlake text-xl md:text-2xl">
                        Join our Affiliate team
                    </div>
                    <h1 className="text-left md:text-2xl text-white font-semibold heldanetext w-full lg:w-3/4">
                        Join our Affiliate Program and start earning on Thrive Library
                    </h1>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 text-sm md:text-base rounded-3xl w-3/4 md:w-1/2 lg:w-[30%]">
                        Become an Affiliate
                    </button>
                </div>
                <img 
                    src={ModelImage2} 
                    alt="Model 1" 
                    className="hidden lg:flex absolute w-1/5 lg:w-[23%] bottom-0 right-32"
                />
                <img 
                    src={ModelImage1} 
                    alt="Model 2" 
                    className="hidden lg:flex absolute w-1/5 lg:w-[23%] bottom-0 right-0"
                />
            </div>

            <div className="flex flex-col justify-center items-center mt-10 md:mt-20 mb-5 md:mb-10">
                <h1 className="heldanetext text-lg md:text-xl font-semibold">
                    Stay Connected
                </h1>
                <div className="flex flex-col md:flex-row mx-auto space-y-4 md:space-y-0 md:space-x-4 mt-4">
                    <div 
                        className="flex flex-col text-center items-center justify-center rounded-3xl p-6 md:p-8 space-y-4 w-full md:w-[45%]"
                        style={{ backgroundImage: `url(${background2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="text-white w-full text-center palmerlake text-lg md:text-2xl">
                            Get a School Library
                        </div>
                        <h1 className="text-center text-lg md:text-lg text-white font-semibold heldanetext w-full">
                            Do you need a library in your school?
                        </h1>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-auto py-2 text-sm md:text-base rounded-3xl w-3/4 md:w-1/2">
                            Connect with Us
                        </button>
                    </div>
                    <div 
                        className="flex flex-col text-center items-center justify-center rounded-3xl p-6 md:p-8 space-y-4 w-full md:w-[45%]"
                        style={{ backgroundImage: `url(${background2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="text-white w-full text-center palmerlake text-lg md:text-2xl">
                            Stay in Touch
                        </div>
                        <h1 className="text-center text-lg md:text-lg text-white font-semibold heldanetext w-full">
                            Get updates directly into your mailbox
                        </h1>
                        <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full">
                            <input
                                className="bg-white p-3 rounded-3xl w-full md:w-[85%]"
                                placeholder="Email"
                                required 
                            />
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 mx-auto text-center text-white px-4 py-2 text-sm md:text-base rounded-3xl w-1/2 md:w-auto">
                                Subscribe
                            </button>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;