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

const warehouses: Warehouse[] = [
  {
    id: 1,
    name: "Central Warehouse",
    resourcesCount: 120,
    location: "123 Main St, Springfield",
    link: '/fooddepartment/central-warehouse'
  },
  {
    id: 2,
    name: "Northside Warehouse",
    resourcesCount: 85,
    location: "456 North Ave, Springfield",
    link: '/fooddepartment/north-side-warehouse'
  },
  {
    id: 3,
    name: "West End Warehouse",
    resourcesCount: 60,
    location: "789 West Rd, Springfield",
    link: '/fooddepartment/west-side-warehouse'
  },
  {
    id: 4,
    name: "South Storage Facility",
    resourcesCount: 90,
    location: "321 South St, Springfield",
    link: '/fooddepartment/south-warehouse'
  },
  {
    id: 5,
    name: "Eastside Depot",
    resourcesCount: 75,
    location: "654 East Blvd, Springfield",
    link: '/fooddepartment/east-warehouse'
  }
];

const data =  [
    {
        "_id": "66a54df7b49614f5eb981085",
        "name": "inventory Waste warehouse 1",
        "item": [
            "66a55ddbb49614f5eb98110b",
            "66a55de9b49614f5eb981110",
            "66a55df3b49614f5eb981114",
            "66a55dfdb49614f5eb981118",
            "66a56610b49614f5eb98124a",
            "66a56611b49614f5eb981252",
            "66a56611b49614f5eb98126c",
            "66a56611b49614f5eb9812a0",
            "66a56611b49614f5eb9812b4",
            "66a56611b49614f5eb9812be",
            "66a56611b49614f5eb9812e2",
            "66a56611b49614f5eb9812c2"
        ],
        "location": "Airport",
        "department": "Waste",
        "__v": 12
    },
    {
        "_id": "66a54e0cb49614f5eb981087",
        "name": "inventory Waste warehouse 2",
        "item": [
            "66a55e05b49614f5eb98111c",
            "66a55e0eb49614f5eb981121",
            "66a55e15b49614f5eb981125",
            "66a55e1eb49614f5eb981129",
            "66a56611b49614f5eb981254",
            "66a56610b49614f5eb981250",
            "66a56611b49614f5eb981256",
            "66a56611b49614f5eb9812a4",
            "66a56611b49614f5eb9812b2",
            "66a56611b49614f5eb9812b6",
            "66a56611b49614f5eb9812ba",
            "66a56611b49614f5eb9812e8"
        ],
        "location": "phinix mall",
        "department": "Waste",
        "__v": 12
    },
    {
        "_id": "66a54e28b49614f5eb981089",
        "name": "inventory waste warehouse 3",
        "item": [
            "66a55e27b49614f5eb98112d",
            "66a55e31b49614f5eb981132",
            "66a55e3db49614f5eb981136",
            "66a55e44b49614f5eb98113a",
            "66a56610b49614f5eb98124c",
            "66a56611b49614f5eb981258",
            "66a56611b49614f5eb98125a",
            "66a56611b49614f5eb9812b0",
            "66a56611b49614f5eb9812d4",
            "66a56611b49614f5eb9812fb",
            "66a56610b49614f5eb98124e",
            "66a56611b49614f5eb9812bc"
        ],
        "location": "sapna sangeeta",
        "department": "Waste",
        "__v": 12
    },
    {
        "_id": "66a54e45b49614f5eb98108b",
        "name": "inventory waste warehouse 4",
        "item": [
            "66a55e4cb49614f5eb98113e",
            "66a55e55b49614f5eb981143",
            "66a55e5eb49614f5eb981147",
            "66a55e66b49614f5eb98114b",
            "66a56611b49614f5eb981262",
            "66a56611b49614f5eb981260",
            "66a56611b49614f5eb981286",
            "66a56611b49614f5eb9812a2",
            "66a56611b49614f5eb9812b8",
            "66a56611b49614f5eb9812c4",
            "66a56611b49614f5eb9812ce",
            "66a56611b49614f5eb9812de"
        ],
        "location": "mangliya",
        "department": "Waste",
        "__v": 12
    }]


const WasteDepartment = () => {
  return (  
    <>
<div className="flex flex-col min-h-screen py-10 px-4 sm:px-6 bg-gray-200 ">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">Waste Department Warehouses</h1>
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

export default WasteDepartment


