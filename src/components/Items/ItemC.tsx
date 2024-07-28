import React from 'react'

const data = [
  {
    "inventoryName": "inventory Construction warehouse 1",
    "name": "Cement",
    "category": "Construction",
    "expiryDate": "2024-06-30",
    "quantity": 400,
    "minQuantity": 100,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Construction warehouse 1",
    "name": "Bricks",
    "category": "Construction",
    "expiryDate": "2025-12-31",
    "quantity": 1000,
    "minQuantity": 200,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Construction warehouse 1",
    "name": "Steel Rods",
    "category": "Construction",
    "expiryDate": "2025-12-31",
    "quantity": 500,
    "minQuantity": 120,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Construction warehouse 1",
    "name": "Sand",
    "category": "Construction",
    "expiryDate": "2025-12-31",
    "quantity": 800,
    "minQuantity": 150,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Construction warehouse 2",
    "name": "Gravel",
    "category": "Construction",
    "expiryDate": "2025-12-31",
    "quantity": 600,
    "minQuantity": 130,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Construction warehouse 2",
    "name": "Tiles",
    "category": "Construction",
    "expiryDate": "2025-12-31",
    "quantity": 700,
    "minQuantity": 160,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Construction warehouse 2",
    "name": "Pipes",
    "category": "Construction",
    "expiryDate": "2025-12-31",
    "quantity": 900,
    "minQuantity": 180,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Construction warehouse 2",
    "name": "Paint",
    "category": "Construction",
    "expiryDate": "2024-12-31",
    "quantity": 300,
    "minQuantity": 70,
    "type": "Non-Perishable"
  }
];

function ItemC() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p><strong>Inventory:</strong> {item.inventoryName}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Expiry Date:</strong> {item.expiryDate}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Min Quantity:</strong> {item.minQuantity}</p>
            <p><strong>Type:</strong> {item.type}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemC
