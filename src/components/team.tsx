import React from 'react';

interface TeamMember {
    name: string;
    role: string;
    photo: string;
}

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, photo }) => {
    return (
        <div className="flex flex-col items-center rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-sm mx-auto">
            <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-t-3xl">
                <img 
                    src={photo} 
                    alt={name} 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className='bg-blue-600 bg-opacity-90 rounded-b-3xl p-4 w-full text-left'>
                <h2 className="text-lg md:text-xl font-semibold heldanetext text-white">{name}</h2>
                <p className="text-white text-sm md:text-base">{role}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;