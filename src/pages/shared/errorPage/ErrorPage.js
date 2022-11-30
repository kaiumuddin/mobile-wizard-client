import React from 'react';
import {Link} from "react-router-dom";
import error from '../../../assets/error.jpg';

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen my-10 bg-base-200">
            <div className="hero-content flex-col">
                <img alt="" src={error} className="w-full rounded-lg shadow-2xl" />
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