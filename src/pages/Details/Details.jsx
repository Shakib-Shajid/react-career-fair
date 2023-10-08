import { useLoaderData, useParams } from "react-router-dom";

import Navbar from "../Shared/Navbar/Navbar"
const Details = () => {
    const { id } = useParams();
    const Details = useLoaderData();
    console.log(Details.img)

    const idInt = parseInt(id);
    const job = Details.find(job => job.id === idInt)
    console.log(job)
    return (
        <div>
            {/* <Header></Header> */}
            <Navbar></Navbar>
            <div className="grid md:grid-cols-3 ">
                <div className="col-span-4 ">
                    {/* <p>{id}</p> */}

                    <div className="space-y-3 my-8">
                        <div >
                            <img src={job.img} className="h-96 mx-auto" alt="" />
                        </div>
                        <div className="block md:flex justify-between">
                            <h1 className=" text-xl md:text-3xl font-medium">{job.title}</h1>
                            <p className=" text-lg md:text-xl">price: {job.price}</p>
                        </div>
                        <p className="text-sm md:text-lg">{job.description}</p>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default Details;