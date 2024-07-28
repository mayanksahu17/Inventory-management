'use client'
import React from 'react'
import { Warehouse } from '../ui/Type' // Adjust path as needed
import WarehouseDetails from '../ui/Warehouses';

const exampleWarehouseData: Warehouse = {
  name: 'North Warehouse',
  resources: [
    { name: 'Milk', quantity: 150 },
    { name: 'Egg', quantity: 200 },
    { name: 'Cheese', quantity: 80 },
    { name: 'Pulse', quantity: 100 },
    { name: 'Wheat', quantity: 120 },
    { name: 'Rice', quantity: 180 },
    { name: 'Onion', quantity: 75 },
    { name: 'Butter', quantity: 60 }
  ],
  resourceDetails: {
    Milk: {
      name: 'Milk',
      category: 'Perishable',
      expiryDate: '2024-09-15',
      quantity: 150 // liters
    },
    Egg: {
      name: 'Egg',
      category: 'Perishable',
      expiryDate: '2024-08-30',
      quantity: 200 // count
    },
    Cheese: {
      name: 'Cheese',
      category: 'Perishable',
      expiryDate: '2024-10-01',
      quantity: 80 // kilograms
    },
    Pulse: {
      name: 'Pulse',
      category: 'Non-Perishable',
      expiryDate: '2025-05-20',
      quantity: 100 // kilograms
    },
    Wheat: {
      name: 'Wheat',
      category: 'Non-Perishable',
      expiryDate: '2025-06-15',
      quantity: 120 // kilograms
    },
    Rice: {
      name: 'Rice',
      category: 'Non-Perishable',
      expiryDate: '2025-07-10',
      quantity: 180 // kilograms
    },
    Onion: {
      name: 'Onion',
      category: 'Perishable',
      expiryDate: '2024-09-05',
      quantity: 75 // kilograms
    },
    Butter: {
      name: 'Butter',
      category: 'Perishable',
      expiryDate: '2024-08-20',
      quantity: 60 // kilograms
    }
  }
};

const NorthWareHouse = () => {
  return (
    <div>
       <div className="flex flex-col min-h-screen py-10 px-4 sm:px-6 bg-gray-100">
      {/* <WarehouseDetails warehouseData={exampleWarehouseData} /> */}
     <WarehouseDetails  warehouseData={exampleWarehouseData}/>
    </div>
    </div>
  )
}

export default NorthWareHouse
