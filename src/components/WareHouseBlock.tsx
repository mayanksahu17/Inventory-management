'use client'
import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';


const cards = [
  {
    pic: '/assets/images/food1.jpeg',
    href: "admin/perishable/food",
    head: 'Food Department'
  },
  {
    pic: '/assets/images/construction.jpeg',
    href: "admin/non-perishable/construction",
    head: 'Construction Department'
  },
  {
    pic: '/assets/images/waste.jpeg',
    href: "admin/non-perishable/waste",
    head: 'Waste/Garbage Department'
  },
]

const WareHouseBlock = () => {
  return (
    <>
      <div>
        <div className='mt-10'>
          <h1 className='font-bold text-center text-2xl'>Explore Warehouse</h1>
        </div>

        <div className="flex justify-center items-center w-full lg:w-1/4 mx-auto gap-1 lg:gap-4 p-2 bg-gray-100 rounded-md mt-4 mb-4">
      <input
        type="text"
        placeholder="What department are you looking for?"
        className="flex-grow text-sm px-2 text-black tracking-tight focus:outline-none bg-gray-100"
      />
      <button type='submit'>
      <FaMagnifyingGlass className="w-6 h-6 text-gray-600" />
      </button>
    </div>

    <div>
      <div className='grid grid-col-1 grid-cols-3 w-[90%] border'>
        {cards.map((feat, i)=>(
          <div key={i} className='indi  justify-around'>
            <Link href={feat.href}>
            <Image src={feat.pic} alt='' height={300} width={300} className=' mb-2'/>
            </Link>
            <div className= "">
              <h1 className="">{feat.head}</h1>
            </div>
          </div>
        ))}

      </div>
    </div>

      </div>

    </>
  )
}

export default WareHouseBlock
