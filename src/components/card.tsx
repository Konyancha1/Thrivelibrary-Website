import React from 'react';

interface CardProps {
    icon: React.ReactNode;
    header: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ icon, header, text }) => {
    return (
        <div className="p-4 flex flex-col items-start">
            <div className="mb-2">
                {icon}
            </div>
            <h2 className="text-lg md:text-xl font-semibold mb-2 heldanetext">{header}</h2>
            <p className="text-sm md:text-base text-gray-700 text-left">{text}</p>
        </div>
    );
};

export default Card;
