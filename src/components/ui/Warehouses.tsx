// WarehouseDetails.tsx
'use client';
import React, { useState } from 'react';
import { Warehouse, ResourceDetail } from './Type'; // Adjust path as needed

type WarehouseDetailsProps = {
  warehouseData: Warehouse;
};

const WarehouseDetails: React.FC<WarehouseDetailsProps> = ({ warehouseData }) => {
  const [hoveredResource, setHoveredResource] = useState<string | null>(null);

  const handleMouseEnter = (resourceName: string) => {
    setHoveredResource(resourceName);
  };

  const handleMouseLeave = () => {
    setHoveredResource(null);
  };

  const getResourceDetails = (name: string): ResourceDetail | null => {
    return warehouseData.resourceDetails[name] || null;
  };

  return (
    <div className="flex flex-col min-h-screen py-10 px-4 sm:px-6 bg-gray-100">
      <div className="w-full shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">{warehouseData.name}</h1>
        
        <div className="relative w-full">
          <table className="w-[60%] mx-auto divide-y divide-gray-200 rounded-md shadow-md">
            <thead className="bg-gray-400">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Resource</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Quantity</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50 divide-y divide-gray-200">
              {warehouseData.resources.map((resource) => (
                <tr
                  key={resource.name}
                  onMouseEnter={() => handleMouseEnter(resource.name)}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-500 cursor-pointer">
                    {resource.name}
                    {hoveredResource === resource.name && (
                      <div className="absolute left-full top-0 ml-4 bg-white shadow-lg border rounded-lg p-4 w-64 z-10">
                        <h3 className="text-lg font-semibold text-gray-900">{getResourceDetails(resource.name)?.name}</h3>
                        <p className="text-sm text-gray-600"><strong>Category:</strong> {getResourceDetails(resource.name)?.category}</p>
                        <p className="text-sm text-gray-600"><strong>Expiry Date:</strong> {getResourceDetails(resource.name)?.expiryDate}</p>
                        <p className="text-sm text-gray-600"><strong>Quantity:</strong> {getResourceDetails(resource.name)?.quantity}</p>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resource.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow transition-colors hover:bg-blue-400"
          >
            Back to Warehouses
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
