import Lottie from "lottie-react";
import logIn from "../../../public/Animation/LogIn.json"
import { NavLink, useNavigate } from "react-router-dom";
import "./Style.css"
import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import Swal from "sweetalert2";

const LogIn = () => {

    const { SignUser } = useContext(Context)
    const navigate = useNavigate()
    const handlelogin = (e) => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value

        SignUser(email, password)
            .then(res => {
                console.log(res);
                Swal.fire({
                    icon: "success",
                    title: "You Successfully LogIn",
                    showConfirmButton: false,
                    timer: 2500
                });
                navigate('/')
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
                        <Lottie animationData={logIn}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlelogin} className="card-body">
                            <h1 className="text-4xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <NavLink to={`/registration`} className="text-right mt-1">New User??</NavLink>
                            </div>
                            <div className="form-control mt-6">
                                <button id="loginbox" className="btn bg-blue-700 text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogIn;