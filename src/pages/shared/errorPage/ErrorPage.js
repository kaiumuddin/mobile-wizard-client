import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen my-10 bg-base-200">
            <div className="hero-content flex-col">
                <img alt="" src="https://placeimg.com/400/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Error!</h1>
                    <p className="py-6">No route found</p>
                    <Link to="/" className="btn btn-primary">Go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;