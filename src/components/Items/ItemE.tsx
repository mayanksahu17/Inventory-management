import React from 'react'

const data = [
  {
    "inventoryName": "inventory Electronics warehouse 1",
    "name": "Laptops",
    "category": "Electronics",
    "expiryDate": "2025-12-31",
    "quantity": 50,
    "minQuantity": 10,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Electronics warehouse 1",
    "name": "Desktops",
    "category": "Electronics",
    "expiryDate": "2025-12-31",
    "quantity": 40,
    "minQuantity": 8,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Electronics warehouse 1",
    "name": "Monitors",
    "category": "Electronics",
    "expiryDate": "2025-12-31",
    "quantity": 60,
    "minQuantity": 12,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Electronics warehouse 1",
    "name": "Keyboards",
    "category": "Electronics",
    "expiryDate": "2025-12-31",
    "quantity": 70,
    "minQuantity": 15,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Electronics warehouse 2",
    "name": "Mouse",
    "category": "Electronics",
    "expiryDate": "2025-12-31",
    "quantity": 90,
    "minQuantity": 20,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Electronics warehouse 2",
    "name": "Printers",
    "category": "Electronics",
    "expiryDate": "2025-12-31",
    "quantity": 30,
    "minQuantity": 5,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Electronics warehouse 2",
    "name": "Scanners",
    "category": "Electronics",
    "expiryDate": "2025-12-31",
    "quantity": 20,
    "minQuantity": 4,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory Electronics warehouse 2",
    "name": "Projectors",
    "category": "Electronics",
    "expiryDate": "2025-12-31",
    "quantity": 25,
    "minQuantity": 6,
    "type": "Non-Perishable"
  }
];

function ItemE() {
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

export default ItemE
