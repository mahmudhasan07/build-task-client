import banner from '../../../public/images/Creative-01-6.png'
import banneran from '../../../public/images/Animation - 1703108541318.json'
import Lottie from 'lottie-react';
import './Banner.css'
import { useContext, useEffect } from 'react';
import { Context } from '../ContextAPI/ContextAPI';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

    const {user} = useContext(Context)
    useEffect(()=>{
        AOS.init()
    },[])
    // console.log(user, "paise");
    return (
        <section className='flex flex-wrap justify-around bg-blue-50 h-96  lg:my-10 my-5'>
            <div data-aos="fade-right" data-aos-delay={300} data-aos-easing="ease-in-sine" className='my-auto'>
                <h1 className='text-4xl my-auto'>What is <br />
                Task Management??</h1>
                <NavLink to={`/login`}><button className='btn bg-blue-600 text-white'>Let's Explore</button></NavLink>
            </div>
            <div data-aos="fade-up" data-aos-delay={300} data-aos-easing="ease-in-sine"   id='img' className='w-96'>
                <Lottie className='' animationData={banneran}></Lottie>
            </div>
        </section>
    );
};

export default Banner;