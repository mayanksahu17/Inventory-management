'use client'
import React, { useState, useEffect } from 'react'
import { IoLocation } from "react-icons/io5";
const data = [
    {}
]

const FooterBlock = () => {
    // const [dateTime, setDateTime] = useState({
    //     time: new Date().toLocaleTimeString(),
    //     date: new Date().toLocaleDateString(),
    // });

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setDateTime({
    //             time: new Date().toLocaleTimeString(),
    //             date: new Date().toLocaleDateString(),
    //         });
    //     }, 1000); // Update every second

    //     return () => clearInterval(intervalId); // Clean up the interval on component unmount
    // }, []);
    return ( 
        <>
            <div>
                <div className='flex flex-col items-center bg-gray-900 lg:flex-row lg:justify-around gap-4 w-full  border p-4 rounded-lg text-white shadow-md '>
                    <div className='flex flex-col items-center lg:items-start'>
                        <p>Copyright @ Indore 2024</p>
                        <p>Developed by LateComers</p>
                    </div>
                    {/* <div className='flex flex-col items-center'>
                        <div>{dateTime.time}</div>
                        <div>{dateTime.date}</div>
                    </div> */}
                    <div className='flex items-center gap-2'>
                        <IoLocation className='h-6 w-6' />
                        <p>Indore</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default FooterBlock
