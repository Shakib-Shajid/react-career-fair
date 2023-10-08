import Navbar from "../Shared/Navbar/Navbar";


const Galary = () => {
    return (
      
        <div className="my-10">
            <Navbar></Navbar>
            <h1 className=" text-sm md:text-3xl font-bold text-center my-10">This is  galary page ok</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
                    <img src="laptop.jpg" alt="" />
                    <img src="laptop.jpg" alt="" />
                    <img src="laptop.jpg" alt="" />
                    <img src="laptop.jpg" alt="" />
                    <img src="laptop.jpg" alt="" />
                    <img src="laptop.jpg" alt="" />
               

            </div>
        </div>
    );
};

export default Galary;