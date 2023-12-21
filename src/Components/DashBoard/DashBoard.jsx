import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    const { user } = useContext(Context)
    return (
        <section >
            <div className="flex flex-wrap lg:gap-20">
                <div className="bg-blue-600 lg:w-1/5 w-full lg:h-screen align-middle flex lg:flex-col  justify-center">
                    
                    
                    <div className="">
                        {/* layOut section */}
                        <ul className="text-lg font-semibold w-1/2 flex lg:flex-col gap-2  mx-auto">
                        <NavLink to={`/dashboard`}><li>Profile</li></NavLink>
                        <NavLink to={`create-task`}><li>Create Task</li></NavLink>
                        <NavLink to={`previews-task`}><li>Previews Task</li></NavLink>
                        </ul>
                    <div className="divider">OR</div>
                    <div className="my-5 w-1/2  mx-auto">
                        <NavLink to={`/`} className={`text-lg font-semibold`}>Home</NavLink>
                    </div>
                    </div>
                </div>
                <div className="lg:w-3/5  ">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;