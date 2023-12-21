import banner from '../../../public/images/Creative-01-6.png'
import banneran from '../../../public/images/Animation - 1703108541318.json'
import Lottie from 'lottie-react';
import './Banner.css'
import { useContext } from 'react';
import { Context } from '../ContextAPI/ContextAPI';
import { NavLink } from 'react-router-dom';

const Banner = () => {

    const {user} = useContext(Context)
    // console.log(user, "paise");
    return (
        <section className='flex flex-wrap justify-around bg-blue-50  lg:my-10 my-5'>
            <div className='my-auto'>
                <h1 className='text-4xl my-auto'>What is <br />
                Task Management??</h1>
                <NavLink to={`/login`}><button className='btn bg-blue-600 text-white'>Let's Explore</button></NavLink>
            </div>
            <div id='img' className='w-96'>
                <Lottie className='' animationData={banneran}></Lottie>
            </div>
        </section>
    );
};

export default Banner;