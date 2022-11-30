import {useQuery} from "@tanstack/react-query";
import React, {useContext, useEffect, useState} from 'react';
import toast from "react-hot-toast";
import {AuthContext} from "../../../contexts/AuthProvider";

const MyProducts = () => {

    const {user} = useContext(AuthContext);


    const {data: myproducts = [], refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = (product) => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Deleted');
                    refetch();
                }
            });


    };

    const handleAdvertise = (product) => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product Advertised');
                    refetch();
                }
            });


    };


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Sales Status</th>
                            <th>Advertised</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myproducts && myproducts.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.productname}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        {product.available && 'Available'}
                                    </td>
                                    <td>
                                        {product?.advertised ? 'Yes' : 'No'}
                                    </td>
                                    <td>
                                        {product?.available && !product?.advertised && <>
                                            <button onClick={() => handleAdvertise(product)} className="btn bg-transparent text-primary">Advertise</button>
                                        </>}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(product)} className="btn btn-error">Delete</button>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;