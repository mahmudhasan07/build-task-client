import { NavLink } from "react-router-dom";
import logo from "../../../public/images/logo2.png"


const Footer = () => {
    return (
        <section>
            <footer className="footer p-10 bg-blue-600  text-white">
                <nav className=" my-auto">
                    <img  className="w-72 " src={logo} alt="" />
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <ul className=" text-base  ">
                    <NavLink to={`/`}><li className="my-auto">Home</li></NavLink>
                    <NavLink to={`/tasks`}><li>Tasks</li></NavLink>
                    <NavLink to={`/contact-us`}><li>Contact Us</li></NavLink>
                </ul>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </section>
    );
};

export default Footer;