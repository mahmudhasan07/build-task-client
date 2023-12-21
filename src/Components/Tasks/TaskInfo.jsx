import { useParams } from "react-router-dom";
import useServer from "../Hooks/useServer";
import useServer2 from "../Hooks/useServer2";
import Lottie from "lottie-react";
import loader from "../../../public/Animation/Loader.json"
import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import useAxios from "../Axios/useAxios";
import Swal from "sweetalert2";


const TaskInfo = () => {
    const id = useParams()
    const {user}  = useContext(Context)
    console.log(id.id);
    const [data] = useServer2('tasks', id?.id)
    // console.log(data);
    const axiosLink = useAxios()
    

    const handletask = () => {
        const tittle = data?.tittle
        const image = data?.image
        const createby = data?.createby
        const deadline = data?.deadline
        const level = data?.level
        const email = user?.email
        const status = 'pending'
    
        const task = {tittle,image,createby,deadline,level,email,status}
        console.log(task);
        axiosLink.post('/taketasks', task)
        .then(res=>{
            console.log(res);
            Swal.fire({
                icon: "success",
                title: "Successfully, you take the task ",
                showConfirmButton: false,
                timer: 2500
            });
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <section>
            <h1 className="text-3xl font-bold text-center lg:my-10 my-5">Task Details</h1>
            <div>
                {
                    data == "l" ?
                        <Lottie animationData={loader}></Lottie>
                        :
                        <div>
                            <div className="flex flex-wrap justify-around">
                                <div>
                                    <img className="w-4/5" src={data.image} alt="" />
                                </div>
                                <div className="my-auto">
                                    <h1 className="text-2xl font-semibold">{data.tittle}</h1>
                                    <p className="text-lg"><span className="font-semibold">Level</span>: {data.level}</p>
                                    <p className="text-lg"><span className="font-semibold">Deadline</span>: {data.deadline}</p>
                                    <p className="text-lg"><span className="font-semibold">Create-by</span>: {data.createby}</p>
                                    <button onClick={handletask} className="btn bg-blue-500 text-white">Take task</button>
                                </div>
                            </div>
                            <div className="lg:my-10 my-4">
                                <h1 className="text-2xl font-semibold">Description</h1> <br />
                                <p className="text-lg">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                }
            </div>
        </section>
    );
};

export default TaskInfo;