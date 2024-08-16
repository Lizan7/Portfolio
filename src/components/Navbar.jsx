import React from 'react'

const Navbar = () => {
    return (

        <div className=' h-20 flex justify-around items-center gap-10 bg-white'>
            <div className='flex items-center gap-3 '>
                <div className='flex text-lg bg-blue-500 rounded-full justify-center items-center w-8 h-8 text-white font-medium'>LS</div>
                {/* <h1 className='flex font-semibold text-lgk'>Lizan Shrestha</h1> */}
            </div>
            <div className='flex gap-20 items-center'>
                <p className='font-medium text-black'>Home</p>
                <p className='font-medium text-black'>About Me</p>
                <p className='font-medium text-black'>My Skills</p>
                <p className='font-medium text-black'>Contact</p>

            </div>
            <button className='bg-blue-700 py-2 px-4 rounded text-white'>
                Hire Me!
            </button>


        </div>

    )
}

export default Navbar
