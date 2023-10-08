import { useState, useEffect } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const Galary = () => {
    const [img, setImg] = useState([]);

    useEffect(() => {
        fetch("./career-fairs.json")
            .then(response => response.json())
            .then(data => setImg(data));
    }, []);

    return (
        <div className="my-10">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {img.map(aImg => <img src={aImg.img} className="h-72" alt={aImg.title} key={aImg.id}></img>)}
            </div>
        </div>
    );
};

export default Galary;