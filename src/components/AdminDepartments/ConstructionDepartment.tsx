

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
        "_id": "66a54ed8b49614f5eb98108d",
        "name": "inventory Construction warehouse 1",
        "item": [
            "66a55e6fb49614f5eb98114f",
            "66a55e76b49614f5eb981154",
            "66a55e82b49614f5eb981158",
            "66a55e89b49614f5eb98115c",
            "66a56611b49614f5eb98125c",
            "66a56611b49614f5eb981266",
            "66a56611b49614f5eb981272",
            "66a56611b49614f5eb981290",
            "66a56611b49614f5eb9812ca",
            "66a56611b49614f5eb9812c8",
            "66a56611b49614f5eb9812d0",
            "66a56611b49614f5eb9812ee"
        ],
        "location": "Kushwaha nagar",
        "department": "Construction",
        "__v": 12
    },
    {
        "_id": "66a54eeab49614f5eb98108f",
        "name": "inventory Construction warehouse 2",
        "item": [
            "66a55e92b49614f5eb981160",
            "66a55e99b49614f5eb981165",
            "66a55ea0b49614f5eb981169",
            "66a55ea7b49614f5eb98116d",
            "66a56611b49614f5eb981280",
            "66a56611b49614f5eb98127c",
            "66a56611b49614f5eb9812ae",
            "66a56611b49614f5eb9812c0",
            "66a56611b49614f5eb9812c6",
            "66a56611b49614f5eb9812cc",
            "66a56611b49614f5eb9812ea",
            "66a56611b49614f5eb9812e0"
        ],
        "location": "Anjani nagar",
        "department": "Construction",
        "__v": 12
    },
    {
        "_id": "66a54efbb49614f5eb981091",
        "name": "inventory Construction warehouse 3",
        "item": [
            "66a55eafb49614f5eb981171",
            "66a55eb6b49614f5eb981176",
            "66a55ebeb49614f5eb98117a",
            "66a55ec4b49614f5eb98117e"
        ],
        "location": "Nanda nagar",
        "department": "Construction",
        "__v": 4
    },
    {
        "_id": "66a54f1bb49614f5eb981093",
        "name": "inventory Construction warehouse 4",
        "item": [
            "66a55ecbb49614f5eb981182",
            "66a55ed3b49614f5eb981187",
            "66a55edbb49614f5eb98118b",
            "66a55ee4b49614f5eb98118f"
        ],
        "location": "Bangarda",
        "department": "Construction",
        "__v": 4
    }
]


const ConstructionDepartment = () => {
  return (  
    <>
<div className="flex flex-col min-h-screen py-10 px-4 sm:px-6 bg-gray-200 ">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">Construction Department Warehouses</h1>
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
              <Link href={"/admin/constructiondepartment/constructionItem"}>
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

export default ConstructionDepartment


