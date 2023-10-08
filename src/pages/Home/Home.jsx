import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import Footer from "../Footer/Footer";



const Home = () => {
// load the data of news
const news = useLoaderData();
// console.log(news)

    return (
        <div>
            {/* <Header>
            </Header>
            <BreakingNews></BreakingNews> */}

            <Navbar></Navbar>
            {/* <h2 className="text-3xl font-poppins font-bold">this is home page</h2> */}
            <div className="mt-10">
                <div className="hero w-full min-h-[300px] md:min-h-[600px] " style={{ backgroundImage: 'url("austin-distel-wD1LRb9OeEo-unsplash.jpg")' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Career Fair</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                {/* <div className=""> 
                    <LeftSideNav></LeftSideNav>
                </div> */}
                {/* news container */}
                <div className="md:col-span-2 grid lg:grid-cols-3 gap-5"> 
                    {/* <h2 className="text-4xl">News coming soon</h2> */}

                    {

                        news.map(aNews => <NewsCard key={aNews.id}
                        news={aNews}
                        
                        
 
                        ></NewsCard>)
                    }
                    
                </div>
                {/* <div className="">
                <RightSideNav></RightSideNav>

                </div> */}
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default Home;