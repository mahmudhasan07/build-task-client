import { useContext } from "react";
import { Context } from "../../ContextAPI/ContextAPI";
import useServer from "../../Hooks/useServer";
import Lottie from "lottie-react";
import loader from "../../../../public/Animation/Loader.json"
import { useNavigate } from "react-router-dom";

const Preview = () => {
    const { user } = useContext(Context)

    const [data] = useServer("tasks", user?.email)
    console.log(data);
    return (
        <section>
            <h1 className="text-3xl font-semibold text-center">Yours Create Tasks</h1>
            <div className="flex flex-wrap justify-center lg:my-5 my-3 gap-10">
                {
                    data == "l" ?
                        <div className="w-1/3 mx-auto"><Lottie animationData={loader}></Lottie></div>
                        :
                        data.map((element, idx) => <Card key={idx} card={element} id={idx}></Card>)
                }
            </div>
        </section>
    );
};

const Card = ({ card, id }) => {
    console.log(card);
    const navigate = useNavigate()
    return (
        <div className="w-80 p-2 border-2 border-black">
            <img className="w-80 h-64" src={card.image} alt="" />
            <h1>{card.tittle}</h1>
            <p><span>Level:</span>{card.level}</p>
            <button onClick={()=>navigate(`update/${card._id}`)} className="btn w-full bg-blue-700 text-white">Update</button>

        </div>
    )
}

export default Preview;