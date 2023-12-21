import { useContext, useState } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import useAxios from "../Axios/useAxios";


const DashInfo = () => {
    const {user} = useContext(Context)
    const [dodata, setdodata] = useState(0)
    const [ondata, setondata] = useState(0)
    const [completedata, setcompletedata]= useState(0)
    const axiosLink = useAxios()
    axiosLink.get('/tasks')
    .then(res=>{
        // console.log(res.data);
        const data = res?.data?.filter(element=> element.createby !== user?.email)
        // console.log(data);
        setdodata(data.length)
    })
    .catch(error=>{
        console.log(error);
    })

    axiosLink.get('/taketasks')
    .then(res=>{
        console.log(res.data);
        const data = res?.data?.filter(element=> element.email == user?.email & element.status == "pending")
        setondata(data.length)
    })
    .catch(error=>{
        console.log(error);
    })
    axiosLink.get('/taketasks')
    .then(res=>{
        console.log(res.data);
        const data = res?.data?.filter(element=> element.email == user?.email & element.status == "complete")
        setcompletedata(data.length)
    })
    .catch(error=>{
        console.log(error);
    })
    return (
        <section className=" ">
            <h1 className="text-3xl font-bold">Profile Info</h1>
            <div>
                <img className="w-44 h-44 rounded-full object-cover" src={user?.photoURL} alt="" />
                <h1>{user?.displayName}</h1>
                <p>{user?.email}</p>

            </div>
            <div>
                <p className="text-lg">To-do Tasks <span className="bg-blue-500  p-1 rounded-full">{dodata}</span> <progress className="progress progress-primary w-28" value="100" max="100"></progress>Ongoing <span className="bg-orange-500  p-1 rounded-full">{ondata}</span> <progress className="progress progress-primary w-28" value="100" max="100"></progress>Complete Tasks <span className="bg-green-600  p-1 rounded-full">{completedata}</span></p>
            </div>
        </section>
    );
};

export default DashInfo;