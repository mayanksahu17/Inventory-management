import React from 'react'

const data = [
  {
    inventoryName: 'inventory Waste warehouse 1',
    name: 'Plastic Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 200,
    minQuantity: 50,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory Waste warehouse 1',
    name: 'Glass Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 180,
    minQuantity: 45,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory Waste warehouse 1',
    name: 'Metal Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 160,
    minQuantity: 40,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory Waste warehouse 1',
    name: 'Paper Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 220,
    minQuantity: 55,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory Waste warehouse 2',
    name: 'E-waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 300,
    minQuantity: 75,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory Waste warehouse 2',
    name: 'Organic Waste',
    category: 'Waste',
    expiryDate: '2023-08-15',
    quantity: 400,
    minQuantity: 100,
    type: 'Perishable'
  },
  {
    inventoryName: 'inventory Waste warehouse 2',
    name: 'Hazardous Waste',
    category: 'Waste',
    expiryDate: '2024-01-01',
    quantity: 50,
    minQuantity: 10,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory Waste warehouse 2',
    name: 'Biomedical Waste',
    category: 'Waste',
    expiryDate: '2023-08-10',
    quantity: 70,
    minQuantity: 15,
    type: 'Perishable'
  },
  {
    inventoryName: 'inventory waste warehouse 3',
    name: 'Wood Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 150,
    minQuantity: 30,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory waste warehouse 3',
    name: 'Cloth Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 170,
    minQuantity: 35,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory waste warehouse 3',
    name: 'Rubber Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 190,
    minQuantity: 40,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory waste warehouse 3',
    name: 'Electronic Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 210,
    minQuantity: 45,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory waste warehouse 4',
    name: 'Construction Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 250,
    minQuantity: 60,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory waste warehouse 4',
    name: 'Demolition Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 230,
    minQuantity: 55,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory waste warehouse 4',
    name: 'Excavation Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 270,
    minQuantity: 65,
    type: 'Non-Perishable'
  },
  {
    inventoryName: 'inventory waste warehouse 4',
    name: 'Concrete Waste',
    category: 'Waste',
    expiryDate: '2025-12-31',
    quantity: 290,
    minQuantity: 70,
    type: 'Non-Perishable'
  }
];

const ItemW = () => {
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

export default ItemW
