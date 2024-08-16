import React from 'react'
import Navbar from '../components/Navbar'
import heroImage from "../assets/bro.svg"

const Home = () => {
    return (
        <div className='h-screen bg-white'>
            <Navbar />
            <div className='flex '>
                {/* left side div */}
                <div>
                    <h1 className='text-black'>Lizan Shrestha</h1>
                </div>
                {/* Right side div */}
                <div>
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
