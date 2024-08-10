import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar/>
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">Your Name</h1>
                    <h2 className="text-2xl text-gray-600 mb-4">Your Profession</h2>
                    <p className="mb-4">
                        Welcome to my portfolio! I'm a [your profession] with [X] years of experience in [your field].
                        I specialize in [your key skills or areas of expertise].
                    </p>
                    <p className="mb-6">
                        Throughout my career, I've worked on various projects, including [brief mention of notable projects or achievements].
                    </p>
                    <a
                        href="#contact"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Contact Me
                    </a>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="/path-to-your-image.jpg"
                        alt="Your Name"
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home
