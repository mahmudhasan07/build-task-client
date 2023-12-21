import useServer from "../Hooks/useServer";
import loader from "../../../public/Animation/Loader.json"
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Tasks = () => {
    const [data] = useServer("tasks", "")
    console.log(data);
    return (
        <section className="lg:mt-10 mt-5">
            <h1 className="text-4xl font-bold text-center">All Tasks</h1>
            <div className="flex flex-wrap justify-center lg:my-10 my-5 gap-10">
                {
                    data == "l" ?
                        <div className="w-1/3 mx-auto"><Lottie animationData={loader}></Lottie></div>
                        :
                        data.map((element,idx) => <Card key={idx} card={element} id={idx}></Card>)
                }
            </div>

        </section>
    );
};

const Card = ({ card, id }) => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div data-aos="fade-right" data-aos-delay={`${id*300}`} data-aos-easing="ease-in-sine" className="w-80 p-2 border-2 border-black">
            <img className="w-80 h-64" src={card.image} alt="" />
            <h1>{card.tittle}</h1>
            <p><span>Level:</span>{card.level}</p>
            
            <NavLink to={`/tasks/${card._id}`}><button  className="btn w-full bg-blue-700 text-white">Details</button></NavLink>

        </div>
    )
}

export default Tasks;