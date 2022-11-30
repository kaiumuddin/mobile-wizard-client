import React from 'react';

const AdvertisedItems = ({items}) => {
    return (
        <div className="mx-auto container mt-10">
            <div className="">
                <h1 className="text-center text-4xl">Advertised</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    items.map((item, i) =>
                        <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{item.category}</h2>
                                <h2 className="card-title">{item.productname}</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default AdvertisedItems;