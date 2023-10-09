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
            <div data-aos="fade-left" className="mt-10">
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

            <div data-aos="fade-up-right" className="mt-10">
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
            <section data-aos="fade-down-right" className="space-y-2">
                <h2 className="text-3xl font-semibold text-center mb-5">About Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7">
                    <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold text-center">Details</h2>
                            <p className="leading-7">A career fairs management company is an organization that specializes in organizing and managing career fairs. They provide a platform for employers and job seekers to connect and interact with each other. </p>
                        </div>
                    </div>
                    <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold text-center">Our Mission</h2>
                            <p className="leading-7">Their mission is to help job seekers find employment opportunities and assist employers in finding qualified candidates. The company places a high emphasis on trust and security by ensuring that all.</p>
                        </div>
                    </div>
                    <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold text-center">Trust and Security</h2>
                            <p className="leading-7">Their goal is to create a positive experience for both employers and job seekers by providing a professional and organized environment.They aim to make the job search process easier for job seekers by providing them.</p>
                        </div>
                    </div>
                </div>

            </section>

            <section data-aos="flip-left" className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
                        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                        <form action="#">
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                                </div>
                                <div>
                                    {/* <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-success-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button> */}
                                    <button className="btn btn-success text-white">Subscribe</button>
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>

    );
};

export default Home;