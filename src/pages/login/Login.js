import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const Login = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();
    const handleLogin = data => {
        console.log(data);
    };

    return (
        <div className="h-[800px] flex justify-center items-center" >
            <div className="w-96 p-7  shadow-lg rounded-lg">
                <h2 className="text-xl text-center" >Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

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
                                minLength: {value: 6, message: "Password must be at least 6 charecters"}
                            })} />
                        {errors.password && <p role="alert" className="text-error">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>


                    <input className="btn btn-accent w-full" value="Login" type="submit" />
                </form>
                <p >New to doctors portal? <Link to="/signup" className="text-secondary">Create new account</Link> </p>
                <div className="divider">OR</div>
                <button className="uppercase btn btn-outline w-full">Continue with google</button>
            </div>
        </div>
    );
};

export default Login;