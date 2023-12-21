import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useServer2 from '../../Hooks/useServer2';
import useAxios from '../../Axios/useAxios';
import Swal from 'sweetalert2';

const Updatetask = () => {
    const id = useParams()
    const [data, refetch] = useServer2('tasks', id?.id)
    const axiosLink = useAxios()

    const handleSubmit = (e) => {
        e.preventDefault()
        const from = e.target
        const tittle = from.tittle.value
        const description = from.description.value
        const image = from.image.value
        const deadline = from.deadline.value
        const level = from.level.value
        const id = data._id
        const info = { tittle, description, deadline, image, level, id }
        axiosLink.put('/tasks', info)
            .then(res => {
                console.log(res);
                Swal.fire({
                    icon: "success",
                    title: "You Task Successfully Update",
                    showConfirmButton: false,
                    timer: 2500
                });
                refetch()
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <section className=" my-auto">
            <h1 className="text-3xl font-bold">Update Your Task</h1>
            <div>
                <form className="text-xl" onSubmit={handleSubmit}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div>
                        <label>Title:</label> <br />
                        <input name='tittle' defaultValue={data.tittle} className="border-2 border-black" />
                    </div>

                    {/* include validation with required or other standard HTML validation rules */}
                    <div>
                        <label>Descriptions:</label> <br />
                        <input name='description' defaultValue={data.description} className="border-2 border-black" />
                    </div>
                    <div>
                        <label>PhotURL:</label> <br />
                        <input name='image' defaultValue={data.image} className="border-2 border-black" />
                    </div>
                    <div>
                        <label>Deadline:</label> <br />
                        <input name='deadline' defaultValue={data.deadline} className="border-2 border-black" type="date" />
                    </div>
                    <div>
                        <label>Level:</label> <br />
                        <select defaultValue={data.level} className="border-2 border-black w-44" name="level" id="" >
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

export default Updatetask;