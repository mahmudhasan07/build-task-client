import Lottie from "lottie-react";
import logIn from "../../../public/Animation/LogIn.json"
import { NavLink } from "react-router-dom";
import "./Style.css"
import axios from 'axios';
import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import Swal from "sweetalert2"

const Registration = () => {

    const { CreateUser, LogOut, UpdateInfo } = useContext(Context)

    const handlereg = (e) => {
        e.preventDefault()
        const from = e.target

        const name = from.name.value
        const email = from.email.value
        const image = from.image.value
        const password = from.password.value
        console.log(image);

        CreateUser(email, password)
            .then(res => {
                // console.log(res);
                UpdateInfo(name, image)
                    .then(res => {
                        console.log(res);
                        LogOut()
                        Swal.fire({
                            icon: "success",
                            title: "You Successfully Registration",
                            showConfirmButton: false,
                            timer: 2500
                        });
                    })


            })
            .catch(error => {
                console.log(error);
            })



    }
    return (
        <section>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                    <div className="text-center w-2/5 lg:text-left">
                        <Lottie className="" animationData={logIn}></Lottie>
                    </div>
                    <div className="card border-2  w-full max-w-sm  bg-base-100">
                        <form className="card-body" onSubmit={handlereg}>
                            <h1 className="text-4xl font-bold">Registration now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input className="input input-bordered" type="text" name="image" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <NavLink to={`/login`} className={`text-right mt-1`}>Already User??</NavLink>
                            </div>
                            <div className="form-control mt-6">
                                <button id="loginbox" className="btn bg-blue-700 text-white">Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;