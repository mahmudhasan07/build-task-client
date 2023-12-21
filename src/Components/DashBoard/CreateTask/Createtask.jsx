import { useForm } from "react-hook-form"
import useAxios from "../../Axios/useAxios";
import { useContext } from "react";
import { Context } from "../../ContextAPI/ContextAPI";
import Swal from "sweetalert2";

const Createtask = () => {

    const { user } = useContext(Context)
    const axiosLink = useAxios()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        // console.log(data);

        const tittle = data.tittle
        const description = data.description
        const image = data.image
        const deadline = data.deadline
        const level = data.level
        const createby = user?.email
        const info = { tittle, description, deadline, image, level, createby }
        console.log(info);
        axiosLink.post('/tasks', info)
            .then(res => {
                // console.log(res);
                Swal.fire({
                    icon: "success",
                    title: "You Task Successfully Added",
                    showConfirmButton: false,
                    timer: 2500
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <section className=" my-auto">
            <h1 className="text-3xl font-bold">Create Your challenging Task for All</h1>
            <div>
                <form className="text-xl" onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div>
                        <label>Title:</label> <br />
                        <input className="border-2 border-black"  {...register("tittle")} />
                    </div>

                    {/* include validation with required or other standard HTML validation rules */}
                    <div>
                        <label>Descriptions:</label> <br />
                        <input className="border-2 border-black" {...register("description")} />
                    </div>
                    <div>
                        <label>PhotURL:</label> <br />
                        <input className="border-2 border-black" {...register("image")} />
                    </div>
                    <div>
                        <label>Deadline:</label> <br />
                        <input className="border-2 border-black" type="date" {...register("deadline")} />
                    </div>
                    <div>
                        <label>Level:</label> <br />
                        <select className="border-2 border-black w-44" name="" id="" {...register("level")}>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <input className="btn" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default Createtask;