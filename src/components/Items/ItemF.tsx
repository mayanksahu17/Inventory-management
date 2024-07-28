import React from 'react'

const data = [
  {
    "inventoryName": "inventory food warehouse 1",
    "name": "Rice",
    "category": "Food",
    "expiryDate": "2025-07-28",
    "quantity": 100,
    "minQuantity": 20,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 1",
    "name": "Wheat",
    "category": "Food",
    "expiryDate": "2025-06-15",
    "quantity": 150,
    "minQuantity": 30,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 1",
    "name": "Sugar",
    "category": "Food",
    "expiryDate": "2024-12-20",
    "quantity": 80,
    "minQuantity": 15,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 1",
    "name": "Salt",
    "category": "Food",
    "expiryDate": "2025-03-10",
    "quantity": 200,
    "minQuantity": 25,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 2",
    "name": "Milk",
    "category": "Food",
    "expiryDate": "2023-08-10",
    "quantity": 50,
    "minQuantity": 10,
    "type": "Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 2",
    "name": "Cheese",
    "category": "Food",
    "expiryDate": "2023-12-05",
    "quantity": 40,
    "minQuantity": 5,
    "type": "Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 2",
    "name": "Butter",
    "category": "Food",
    "expiryDate": "2024-01-15",
    "quantity": 60,
    "minQuantity": 8,
    "type": "Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 2",
    "name": "Yogurt",
    "category": "Food",
    "expiryDate": "2023-09-20",
    "quantity": 70,
    "minQuantity": 12,
    "type": "Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 3",
    "name": "Apples",
    "category": "Food",
    "expiryDate": "2023-08-05",
    "quantity": 100,
    "minQuantity": 20,
    "type": "Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 3",
    "name": "Oranges",
    "category": "Food",
    "expiryDate": "2023-08-10",
    "quantity": 120,
    "minQuantity": 25,
    "type": "Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 3",
    "name": "Bananas",
    "category": "Food",
    "expiryDate": "2023-08-15",
    "quantity": 80,
    "minQuantity": 15,
    "type": "Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 3",
    "name": "Grapes",
    "category": "Food",
    "expiryDate": "2023-08-12",
    "quantity": 60,
    "minQuantity": 10,
    "type": "Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 4",
    "name": "Tomatoes",
    "category": "Food",
    "expiryDate": "2023-08-08",
    "quantity": 90,
    "minQuantity": 18,
    "type": "Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 4",
    "name": "Potatoes",
    "category": "Food",
    "expiryDate": "2024-02-28",
    "quantity": 130,
    "minQuantity": 22,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 4",
    "name": "Onions",
    "category": "Food",
    "expiryDate": "2023-12-30",
    "quantity": 140,
    "minQuantity": 25,
    "type": "Non-Perishable"
  },
  {
    "inventoryName": "inventory food warehouse 4",
    "name": "Carrots",
    "category": "Food",
    "expiryDate": "2023-08-18",
    "quantity": 110,
    "minQuantity": 20,
    "type": "Perishable"
  }
];

function ItemF() {
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

export default ItemF
