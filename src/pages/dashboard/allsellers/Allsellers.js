import {useQuery} from "@tanstack/react-query";
import React from 'react';
import toast from "react-hot-toast";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Allsellers = () => {

    const {data: seller = [], isLoading, refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://mobile-wizard-server.vercel.app/users/role/seller');
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
                            seller && seller.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td>
                                        <button onClick={() => handleDelete(seller)} className="btn btn-error">Delete</button>
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

export default Allsellers;