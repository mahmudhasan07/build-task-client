import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";
import logo from "../../../public/images/logo2.png"


const NavBar = () => {
    const { user, LogOut } = useContext(Context)
    return (
        <section className="flex flex-wrap justify-around border-b-2 bg-blue-600 border-white ">
            {/* <h1 className="text-3xl my-auto">TaskMasterHub</h1> */}
            <img className="w-72 " src={logo} alt="" />
            <div className="">
                <ul className=" flex flex-wrap mt-1 text-lg p-2 gap-5 ">
                    <NavLink to={`/`}><li className="my-auto">Home</li></NavLink>
                    <NavLink to={`/tasks`}><li>Tasks</li></NavLink>
                    <NavLink to={`/contact-us`}><li>Contact Us</li></NavLink>
                </ul>
            </div>
            <div>
                {
                    user ?
                        <details className="dropdown dropdown-end">
                            <summary className="btn btn-circle border-2 m-1"><img className="rounded-full w-11 h-11 object-cover" src={user?.photoURL} alt="" /></summary>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <p>{user?.displayName}</p>
                                <hr className="my-1 border-2" />
                                {/* <p>{user.email}</p> */}
                                <NavLink to={`/dashboard`}><li className="my-1">DashBoard</li></NavLink>

                                <button onClick={()=>LogOut()} className="btn btn-sm bg-blue-700 text-white">Logout</button>
                            </ul>
                        </details>
                        :
                        ""
                }
            </div>
        </section>
    );
};

export default NavBar;