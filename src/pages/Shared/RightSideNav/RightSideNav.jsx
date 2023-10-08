import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            {/* <h2 className="text-2xl">Right Side</h2> */}

            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Find us</h2>

                <button className="w-full btn btn-outline">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="w-full btn btn-outline">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className='p-4  mb-6 '>
                <h2 className="text-3xl">Find us on</h2>
                <a className="rounded-t-lg p-4 flex text-lg items-center border" href="">

                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>  Facebook</span>
                 </a>
                <a className="p-4 flex text-lg items-center border" href="">

                    <FaTwitter className='mr-2'></FaTwitter>
                    <span>  Twitter</span>
                 </a>
                <a className="p-4 flex text-lg items-center border" href="">

                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>  Instragram</span>
                 </a>
            </div>
            {/* q zone */}

            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q zone</h2>

                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;