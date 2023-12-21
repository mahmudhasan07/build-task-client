

const Qus = () => {
    return (
        <section className="flex flex-wrap">
            <div className="lg:w-1/2">
                <img className=" lg:w-2/3 mx-auto rounded-2xl" src="https://i.ibb.co/0QGSMb1/Qus1.png" alt="" />
            </div>
            <div className="lg:w-1/2">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        <h3 className="text-2xl font-bold">What is the purpose of this website?</h3>
                    </div>
                    <div className="collapse-content">
                        <p>The purpose of a task management website for coding would be to assist programmers and developers in organizing, prioritizing, and tracking their tasks and projects efficiently. </p> <br />
                        <p><span className="font-semibold">Task Organization</span>: Offering a structured system to categorize tasks, set deadlines, and assign priorities to ensure a clear understanding of what needs to be done.</p> <br />
                        <p><span className="font-semibold">Project Tracking</span>: Allowing users to track the progress of their coding projects, monitor milestones, and visualize the overall status of tasks.</p><br />
                        <p><span className="font-semibold">Time Management</span>: Providing tools for time tracking, helping users allocate their time effectively and improve time management skills.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        <h1 className="text-2xl font-bold">what type of people are using this website ?</h1>
                    </div>
                    <div className="collapse-content">
                        <p><span className="font-semibold">Developers/Programmers</span>: These individuals are the primary users. They use the platform to manage their coding tasks, organize their workflow, and keep track of their projects.</p>
                        <p><span className="font-semibold">Tech Startups/Companies</span>: Small to large tech companies or startups employ task management websites to streamline their development processes, enhance productivity, and maintain a structured approach to project management.</p>
                        <p><span className="font-semibold">Remote Workers/Teams</span>: Especially relevant in today's remote work culture, these platforms assist dispersed teams in staying organized, communicating effectively, and synchronizing their work regardless of geographic locations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qus;