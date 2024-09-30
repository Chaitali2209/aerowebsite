import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import your images
import image1 from '../assets/images/bg/team_photo.JPG';
import image2 from '../assets/images/bg2.JPG';
import image3 from '../assets/images/bg/droneport.JPG';

import NavLight from "../components/navLight";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import Pricing from "../components/pricing";
import Blogs from "../components/blog";
import Footer from "../components/footer";
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import GetInTouch from "../components/getInTuoch";
import MissionSection from "../components/mission";

export default function IndexTwo() {
    let [isOpen, setOpen] = useState(false);
    
    // List of background images
    const images = [image1, image2, image3];

    // State to track the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Change image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through the images
        }, 3000); // 5 seconds interval

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [images.length]);

    return (
        <>
            <NavLight />
            <section className="relative table w-full py-36 lg:py-64 overflow-hidden" id="home">
                {/* Background image container */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute image-wrap -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-no-repeat bg-center bg-cover"
                        style={{ backgroundImage: `url(${images[currentImageIndex]})` }} // Dynamically set background image
                    ></div>
                </div>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <div className="text-center">
                            {/* Modal video if required */}
                        </div>
                        <ModalVideo
                            channel="youtube"
                            youtube={{ mute: 0, autoplay: 0 }}
                            isOpen={isOpen}
                            videoId="S_CGed6E610"
                            onClose={() => setOpen(false)} 
                        />

                        <h4 className="text-white font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl my-5">Welcome to the Drone Center at IIT Bombay, a pioneering hub for drone technology and research.</h4>
                    
                        <p className="text-white/70 text-lg max-w-xl mx-auto">As part of the prestigious IIT Bombay, we are committed to pushing the boundaries of aerial robotics, autonomous flight, and UAV innovation to address real-world challenges.
                        </p>
                    
                        
                    </div>
                </div>
            </section>
            <div className="relative">
                {/* <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                    <Link to=""><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
                </div> */}

                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <About />
            <Services />
            <AgencyTab />
            <Cta />
            <Client />
            <Blogs />
            <GetInTouch />
            <Footer />
        </>
    );
}
