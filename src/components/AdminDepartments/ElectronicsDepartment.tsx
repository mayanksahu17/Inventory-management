
'use client'
import React from 'react'
import Link from 'next/link';
type Warehouse = {
  id: number;
  name: string;
  resourcesCount: number;
  location: string;
  link: string;
};


const data =  [
      
      {
          "_id": "66a54f44b49614f5eb981095",
          "name": "inventory Electronics warehouse 1",
          "item": [
              "66a55ef1b49614f5eb981193",
              "66a55ef8b49614f5eb981198",
              "66a55f01b49614f5eb98119c",
              "66a55f08b49614f5eb9811a0",
              "66a56611b49614f5eb98126a",
              "66a56611b49614f5eb981270",
              "66a56611b49614f5eb98127a",
              "66a56611b49614f5eb9812a8",
              "66a56611b49614f5eb9812d6",
              "66a56611b49614f5eb9812d2",
              "66a56611b49614f5eb9812d8",
              "66a56611b49614f5eb9812ec"
          ],
          "location": "Baroli",
          "department": "Electronics",
          "__v": 12
      },
      {
          "_id": "66a54f58b49614f5eb981097",
          "name": "inventory Electronics warehouse 2",
          "item": [
              "66a55f10b49614f5eb9811a4",
              "66a55f1ab49614f5eb9811a9",
              "66a55f29b49614f5eb9811ad",
              "66a55f2eb49614f5eb9811b1",
              "66a56611b49614f5eb981264",
              "66a56611b49614f5eb981284",
              "66a56611b49614f5eb98128e",
              "66a56611b49614f5eb9812a6",
              "66a56611b49614f5eb9812dc",
              "66a56611b49614f5eb9812e6",
              "66a56611b49614f5eb9812da",
              "66a56611b49614f5eb9812e4"
          ],
          "location": "Lavkush",
          "department": "Electronics",
          "__v": 12
      },
      {
          "_id": "66a54f71b49614f5eb981099",
          "name": "inventory Electronics warehouse 3",
          "item": [
              "66a55f35b49614f5eb9811b5",
              "66a55f3db49614f5eb9811ba",
              "66a55f4cb49614f5eb9811be",
              "66a55f55b49614f5eb9811c2"
          ],
          "location": "Nipania",
          "department": "Electronics",
          "__v": 4
      },
      {
          "_id": "66a54f91b49614f5eb98109b",
          "name": "inventory Electronics warehouse 4",
          "item": [
              "66a55f5cb49614f5eb9811c6",
              "66a55f63b49614f5eb9811cb",
              "66a55f6cb49614f5eb9811cf",
              "66a55f73b49614f5eb9811d3"
          ],
          "location": "Bada bangarda",
          "department": "Electronics",
          "__v": 4
      }
  ]


const ElectronicsDepartment = () => {
  return (  
    <>
<div className="flex flex-col min-h-screen py-10 px-4 sm:px-6 bg-gray-200 ">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">Electronics Department Warehouses</h1>
      <div className="flex flex-col space-y-4 mx-10">
        {data.map((inventory) => (
          <div
            key={inventory._id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4 border-l-4 border-blue-500"
          >
            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">{inventory.name}</h2>
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> {inventory.location}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Resources Count:</strong> {inventory.item.length}
              </p>
            </div>
            <div className="flex justify-center">
              <Link href={"/admin/wastedepartment/wasteItem"}>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow transition-colors hover:bg-blue-400"
              >
                View Details
              </button>
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ElectronicsDepartment


