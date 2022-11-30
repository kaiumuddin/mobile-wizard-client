import {useQuery} from "@tanstack/react-query";
import React from 'react';
import toast from "react-hot-toast";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Allbuyers = () => {

    const {data: buyers = [], isLoading, refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://mobile-wizard-server.vercel.app/users/role/buyer');
            const data = await res.json();
            return data;
        }
    });


    const handleDelete = (user) => {
        fetch(`https://mobile-wizard-server.vercel.app/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Deleted');
                }
            });


    };

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers && buyers.map((buyer, i) =>
                                <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.role}</td>
                                    <td>
                                        <button onClick={() => handleDelete(buyer)} className="btn btn-error">Delete</button>
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

export default Allbuyers;