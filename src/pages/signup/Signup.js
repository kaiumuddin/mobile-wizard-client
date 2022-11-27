import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const Signup = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const handleSignup = (data) => {
        console.log(data);
    };

    return (
        <div className="h-[800px] flex justify-center items-center" >
            <div className="w-96 p-7  shadow-lg rounded-lg">
                <h2 className="text-xl text-center" >Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            className="input input-bordered w-full"
                            {...register("name", {
                                required: "Name is required",

                            })} />
                        {errors.name && <p role="alert" className="text-error">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            className="input input-bordered w-full "
                            {...register("email", {
                                required: "Email Address is required",

                            })} />
                        {errors.email && <p role="alert" className="text-error">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            className="input input-bordered w-full "
                            {...register("password", {
                                required: "Password is required",
                                minLength: {value: 6, message: "Password must be at least 6 charecters"},
                            })} />
                        {errors.password && <p role="alert" className="text-error">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>

                    <div className="my-2 ">
                        <h2>Your Role ?</h2>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Buyer</span>
                                <input type="radio" name="role" value='buyer' className="radio checked:bg-blue-500" defaultChecked

                                    {...register("role", {
                                        required: "Name is required",
                                    })}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Seller</span>
                                <input type="radio" name="role" value='seller' className="radio checked:bg-blue-500"
                                    {...register("role", {
                                        required: "Name is required",
                                    })}
                                />
                            </label>
                        </div>
                    </div>


                    <input className="btn btn-accent w-full" value="Sign Up" type="submit" />
                </form>
                <p >Already have an account? <Link to="/login" className="text-secondary">Please Login</Link> </p>
                <div className="divider">OR</div>
                <button className="uppercase btn btn-outline w-full">Continue with google</button>
            </div>
        </div>
    );
};

export default Signup;