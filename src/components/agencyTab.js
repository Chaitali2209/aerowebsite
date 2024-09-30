import React, { useState } from "react";
import { Link } from "react-router-dom";

import project1 from '../assets/images/MDM.JPG';
import project2 from '../assets/images/MDM.JPG';
import project3 from '../assets/images/MDM.JPG';

export default function DroneProjectsTab() {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <section className="relative md:py-24 py-16" id="projects">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">Drone and Anti-Drone Projects</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">
                        Explore our latest advancements in drone and anti-drone technologies. These projects focus on autonomous drone surveillance, anti-drone defense systems, and intelligent drone swarms developed at the IIT Bombay Drone and Anti-Drone Center.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <li role="presentation">
                                    <button 
                                        className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-teal-500 duration-500 ${activeIndex === 1 ? 'text-white bg-teal-500 hover:text-white' : ''}`} 
                                        onClick={() => setActiveIndex(1)}>
                                        <span className="block">Project 1</span>
                                        <span className="text-lg mt-2 block">Autonomous Drone Surveillance</span>
                                        <span className="block mt-2">Developing AI-driven autonomous drones for real-time surveillance and monitoring of critical zones.</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button 
                                        className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 2 ? 'text-white bg-teal-500 hover:text-white' : ''}`} 
                                        onClick={() => setActiveIndex(2)}>
                                        <span className="block">Project 2</span>
                                        <span className="text-lg mt-2 block">Anti-Drone Detection and Neutralization</span>
                                        <span className="block mt-2">Creating counter-drone technologies to detect and neutralize unauthorized drones in sensitive areas.</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button 
                                        className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 3 ? 'text-white bg-teal-500 hover:text-white' : ''}`} 
                                        onClick={() => setActiveIndex(3)}>
                                        <span className="block">Project 3</span>
                                        <span className="text-lg mt-2 block">Swarm Drone Coordination</span>
                                        <span className="block mt-2">Innovating drone swarms to operate in synchronized missions for tasks like search-and-rescue or large-scale monitoring.</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <div className={activeIndex === 1 ? '' : 'hidden'}>
                                <img src={project1} className="shadow dark:shadow-gray-700 rounded-md" alt="Autonomous Drone Surveillance" />

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Autonomous Drone Surveillance</h5>
                                    <p className="text-slate-400 mt-4">This project focuses on creating drones capable of autonomous surveillance, utilizing AI for detecting and tracking anomalies in high-risk zones with minimal human intervention.</p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className={activeIndex === 2 ? '' : 'hidden'}>
                                <img src={project2} className="shadow dark:shadow-gray-700 rounded-md" alt="Anti-Drone Detection and Neutralization" />

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Anti-Drone Detection and Neutralization</h5>
                                    <p className="text-slate-400 mt-4">This project aims to develop a robust anti-drone system capable of detecting, tracking, and neutralizing unauthorized drones, ensuring safety in sensitive environments such as airports and government facilities.</p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className={activeIndex === 3 ? '' : 'hidden'}>
                                <img src={project3} className="shadow dark:shadow-gray-700 rounded-md" alt="Swarm Drone Coordination" />

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Swarm Drone Coordination</h5>
                                    <p className="text-slate-400 mt-4">This project explores swarm drone technology, where multiple drones work in harmony to complete tasks such as large-scale surveillance, emergency response, and other cooperative missions requiring precision and efficiency.</p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
