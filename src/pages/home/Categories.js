import {useQuery} from "@tanstack/react-query";
import React from 'react';
import {Link} from "react-router-dom";

const Categories = () => {

    const Categories = [
        {name: 'Apple', desc: 'See second hand iPhones'},
        {name: 'Samsung', desc: 'See second hand Samsung phones'},
        {name: 'Oneplus', desc: 'See second hand Oneplus phones'}
    ];

    return (
        <div className="mx-auto container mt-10">
            <div>
                <h1 className="text-center text-4xl">Categories</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    Categories.map((category, i) =>
                        <div key={i} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{category.name}</h2>
                                <p>{category.desc}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/category/${category.name}`} className="btn btn-primary">See More</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default Categories;