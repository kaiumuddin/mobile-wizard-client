import React, {useContext, useState} from 'react';
import {Link, useLoaderData} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthProvider";
import BookingModal from "./BookingModal";

const Category = () => {
    const loaderData = useLoaderData();
    const {user} = useContext(AuthContext);
    const [modalData, setModalData] = useState(null);

    return (
        <div className="mx-auto container mt-10">
            <div>
                <h1 className="text-center text-4xl">All Phones</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    loaderData.map((phn, i) =>
                        <div key={phn._id} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{phn.productname}</h2>
                                <p>{phn.description}</p>
                                <p>Condition : {phn.condition}</p>
                                <p>Seller Mobile : {phn.mobile}</p>
                                <p>Original Price : ${phn.originalprice}</p>
                                <p>Resale Price : ${phn.resaleprice}</p>
                                <p>Purchase Year : {phn.purchaseyear}</p>
                                <p>Seller Name : {phn.sellername}</p>
                                <div className="card-actions justify-end">
                                    <label onClick={() => setModalData(phn)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                modalData &&
                <BookingModal
                    modalData={modalData}
                    setModalData={setModalData}
                    user={user}
                ></BookingModal>
            }
        </div >
    );
};

export default Category;