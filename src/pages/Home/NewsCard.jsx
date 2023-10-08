import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, img, id, price, short_desc } = news;
    return (
        <div className="card mb-16  bg-base-100 shadow-xl">
            <figure><img src={img} className="h-72" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {/* <p>{description}</p> */}
                <h1>{price}</h1>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Show Details</button>
                </div> */}
                <p>{short_desc}</p>




                {
                    <Link to={`/news/${id}`} className="text-blue-600 font-bold">
                        <button className="btn btn-success text-white w-full">Show Details</button></Link>
                }


            </div>
        </div >
    );
};

export default NewsCard;