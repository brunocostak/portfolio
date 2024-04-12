import React from 'react';
import 'animate.css';

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    url?: string;
}

const Card = ({ title, description, icon, url }: CardProps) => {
    return (
        url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="bg-gray-700 max-w-96 rounded-lg shadow-md p-6 flex flex-col justify-center items-center backdrop-blur-md backdrop-filter bg-opacity-30 animate__animated h-[280px] w-96 transform transition-transform hover:scale-105 transition duration-300 ease-out">
                <div className="text-2xl text-white mb-4">{icon}</div>
                <h2 className="text-xl font-semibold mb-2">{title.replace(/[_-]/g, ' ')}</h2>
                <p className="text-white">{description}</p>
                <p className="text-white mt-4">Clique no Card!</p>
            </a>
        ) : (
            <div className="bg-gray-700 max-w-96 rounded-lg shadow-md p-6 flex flex-col justify-center items-center backdrop-blur-md backdrop-filter bg-opacity-30 animate__animated h-[280px] transform transition-transform hover:scale-105 transition duration-300 ease-out">
                <div className="text-2xl text-white mb-4">{icon}</div>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-white">{description}</p>
            </div>
        )
    );
};

export default Card;
