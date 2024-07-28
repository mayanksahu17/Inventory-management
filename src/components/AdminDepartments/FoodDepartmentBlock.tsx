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
    "_id": "66a54d95b49614f5eb98107d",
    "name": "inventory food warehouse 1",
    "item": [
        "66a55ab8b49614f5eb9810c7",
        "66a55acbb49614f5eb9810cc",
        "66a55ad5b49614f5eb9810d0",
        "66a55ae0b49614f5eb9810d4",
        "66a56610b49614f5eb981236",
        "66a56610b49614f5eb981238",
        "66a56611b49614f5eb98126e",
        "66a56611b49614f5eb981276",
        "66a56611b49614f5eb981278",
        "66a56611b49614f5eb98127e",
        "66a56610b49614f5eb981246",
        "66a56611b49614f5eb9812f0"
    ],
    "location": "AB Road",
    "department": "Food",
    "__v": 12
},
{
    "_id": "66a54db1b49614f5eb98107f",
    "name": "inventory food warehouse 2",
    "item": [
        "66a55aeab49614f5eb9810d8",
        "66a55af4b49614f5eb9810dd",
        "66a55b02b49614f5eb9810e1",
        "66a55b19b49614f5eb9810e5",
        "66a56610b49614f5eb981240",
        "66a56610b49614f5eb98123a",
        "66a56610b49614f5eb98123e",
        "66a56610b49614f5eb981248",
        "66a56611b49614f5eb981282",
        "66a56611b49614f5eb98128a",
        "66a56611b49614f5eb981298",
        "66a56611b49614f5eb98129c"
    ],
    "location": "bhawarkuan",
    "department": "Food",
    "__v": 12
},
{
    "_id": "66a54dc5b49614f5eb981081",
    "name": "inventory food warehouse 3",
    "item": [
        "66a55b24b49614f5eb9810e9",
        "66a55b2eb49614f5eb9810ee",
        "66a55b3bb49614f5eb9810f2",
        "66a55b47b49614f5eb9810f6",
        "66a56610b49614f5eb98123c",
        "66a56611b49614f5eb981268",
        "66a56611b49614f5eb981274",
        "66a56611b49614f5eb98128c",
        "66a56611b49614f5eb9812aa",
        "66a56611b49614f5eb9812ac",
        "66a56611b49614f5eb9812f5",
        "66a56611b49614f5eb98125e"
    ],
    "location": "marimata",
    "department": "Food",
    "__v": 12
},
{
    "_id": "66a54dd8b49614f5eb981083",
    "name": "inventory food warehouse 4",
    "item": [
        "66a55da5b49614f5eb9810fa",
        "66a55db6b49614f5eb9810ff",
        "66a55dc1b49614f5eb981103",
        "66a55dd1b49614f5eb981107",
        "66a56610b49614f5eb981242",
        "66a56611b49614f5eb981288",
        "66a56611b49614f5eb981292",
        "66a56611b49614f5eb981294",
        "66a56611b49614f5eb981296",
        "66a56611b49614f5eb98129a",
        "66a56611b49614f5eb98129e",
        "66a56610b49614f5eb981244"
    ],
    "location": "Airport",
    "department": "Food",
    "__v": 12
}
  ]


const FoodDepartmentBlock = () => {
  return (  
    <>
<div className="flex flex-col min-h-screen py-10 px-4 sm:px-6 bg-gray-200 ">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">Food Department Warehouses</h1>
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
              <Link href={"/admin/fooddepartment/foodItems"}>
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

export default FoodDepartmentBlock


