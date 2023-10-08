import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import NewsCard from "./NewsCard";
import Footer from "../Footer/Footer";



const Home = () => {
    // load the data of news
    const news = useLoaderData();
    // console.log(news)

    return (
        <div>
            <Navbar></Navbar>
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
                <h3 className="text-3xl font-semibold text-center mb-5">Services</h3>
                {/* news container */}
                <div className="md:col-span-2 grid lg:grid-cols-3 gap-5">
                    {/* <h2 className="text-4xl">News coming soon</h2> */}

                    {

                        news.map(aNews => <NewsCard key={aNews.id}
                            news={aNews}



                        ></NewsCard>)
                    }

                </div >

            </div>
            <section className="space-y-2">
                <h2 className="text-3xl font-semibold text-center mb-5">About Us</h2>
                <p className="mb-3">A Career Fair is an event management agency specializing in organizing and hosting career-related events. These events typically bring together employers and job seekers, creating a platform for networking, job opportunities, and professional development. Career Fairs may work with educational institutions, companies, and jobseekers to facilitate connections, offer workshops, and provide a space for recruitment efforts. Their goal is to bridge the gap between job providers and job seekers, helping individuals explore career opportunities and make meaningful connections within their chosen industries.</p>
                <p>Our mission at Career Fair is to connect talent with opportunity. We strive to create meaningful platforms and events that empower individuals to explore their career potential, discover new possibilities, and connect with employers and industry experts. We are dedicated to facilitating networking, professional development, and educational opportunities that not only benefit job seekers but also contribute to the growth and success of organizations and industries. Our mission is to bridge the gap between talent and demand, fostering a dynamic and thriving workforce for the future.</p>
            </section>
            <section>

            </section>

            <Footer></Footer>
        </div>

    );
};

export default Home;