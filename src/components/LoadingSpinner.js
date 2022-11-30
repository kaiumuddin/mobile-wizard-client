import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center space-x-2" >
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" ></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" ></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" ></div>
        </div>
    );
};

export default LoadingSpinner;