'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <div className='flex justify-center items-center min-h-[76vh] bg-gray-400'>
      <div className='w-full  mx-10 p-8 bg-white rounded-2xl shadow-lg'>
        <div className='flex flex-col lg:flex-row gap-8 justify-center items-center'>
          <div className='w-full flex justify-center rounded-full'>
            <Image src={'/assets/images/imc logo.png'} alt='IMC Logo' height={300} width={550} className='rounded-lg' />
          </div>
          <div className='flex flex-col gap-y-8 items-center w-full'>
            <div className='p-8 w-[78%] bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md transition-transform transform hover:scale-105'>
              <Link href={'/sign-up-supplier'} className='text-lg font-semibold'>
                Sign up as a Supplier
              </Link>
            </div>
            <div className='p-8 w-[78%] bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md transition-transform transform hover:scale-105'>
              <Link href={'/sign-up-manager'} className='text-lg font-semibold'>
              Sign up as a Manager
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
