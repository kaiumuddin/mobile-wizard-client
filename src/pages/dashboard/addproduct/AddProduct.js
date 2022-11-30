import React, {useContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../contexts/AuthProvider";
import useRole from "../../../hooks/useRole";

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const {register, formState: {errors}, handleSubmit} = useForm();
    const navigate = useNavigate();


    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        if (user?.email) {
            const url = `http://localhost:5000/users/${user?.email}`;
            console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log("recieved", data);
                    setUserRole(data.role);
                    console.log(userRole);

                });
        }
    }, [user?.email, userRole]);


    if (userRole !== "seller") {
        return navigate('/');
    }


    const handleAddProduct = (data) => {
        data.selleremail = user.email;
        data.sellername = user.displayName;
        data.available = true;
        data.advertised = false;
        console.log(data);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Successfully added a product');
                    navigate('/dashboard/myproducts');
                } else {
                    toast.error('Failed to add a product');
                }
            });
    };

    return (
        <div className=" flex justify-center items-center" >
            <div className="w-full p-7  shadow-lg rounded-lg">
                <h2 className="text-xl text-center" >Add a product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text"
                            className="input input-bordered w-full"
                            {...register("productname", {
                                required: "product name is required",

                            })} />
                        {errors.name && <p role="alert" className="text-error">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="price"
                            className="input input-bordered w-full "
                            {...register("price", {
                                required: "Price is required",

                            })} />
                        {errors.price && <p role="alert" className="text-error">{errors.price?.message}</p>}
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <div className="input-group">
                            <select className="w-full select select-bordered"

                                {...register("condition", {
                                    required: "condition is required",

                                })}
                            >
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input type="text"
                            className="input input-bordered w-full "
                            {...register("mobile", {
                                required: "mobile is required",

                            })} />
                        {errors.mobile && <p role="alert" className="text-error">{errors.mobile?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text"
                            className="input input-bordered w-full "
                            {...register("location", {
                                required: "location is required",

                            })} />
                        {errors.location && <p role="alert" className="text-error">{errors.location?.message}</p>}
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <div className="input-group">
                            <select className="w-full select select-bordered"
                                {...register("category", {
                                    required: "category is required",

                                })}
                            >
                                <option>Samsung</option>
                                <option>Apple</option>
                                <option>Oneplus</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text"
                            className="input input-bordered w-full "
                            {...register("description", {
                                required: "description is required",

                            })} />
                        {errors.description && <p role="alert" className="text-error">{errors.description?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Years of purchase</span>
                        </label>
                        <input type="number"
                            className="input input-bordered w-full "
                            {...register("purchaseyear", {
                                required: "Years of purchase is required",

                            })} />
                        {errors.description && <p role="alert" className="text-error">{errors.description?.message}</p>}
                    </div>


                    <input className="btn btn-accent w-full mt-5" value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;