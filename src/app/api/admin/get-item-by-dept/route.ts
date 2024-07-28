import dbConnect from "@/lib/DbConnect";
import { NextResponse, NextRequest } from "next/server";
import Item from "@/models/Item";

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
    },
    {
        "inventoryName": "inventory Waste warehouse 1",
        "name": "Plastic Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 200,
        "minQuantity": 50,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory Waste warehouse 1",
        "name": "Glass Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 180,
        "minQuantity": 45,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory Waste warehouse 1",
        "name": "Metal Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 160,
        "minQuantity": 40,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory Waste warehouse 1",
        "name": "Paper Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 220,
        "minQuantity": 55,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory Waste warehouse 2",
        "name": "E-waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 300,
        "minQuantity": 75,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory Waste warehouse 2",
        "name": "Organic Waste",
        "category": "Waste",
        "expiryDate": "2023-08-15",
        "quantity": 400,
        "minQuantity": 100,
        "type": "Perishable"
    },
    {
        "inventoryName": "inventory Waste warehouse 2",
        "name": "Hazardous Waste",
        "category": "Waste",
        "expiryDate": "2024-01-01",
        "quantity": 50,
        "minQuantity": 10,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory Waste warehouse 2",
        "name": "Biomedical Waste",
        "category": "Waste",
        "expiryDate": "2023-08-10",
        "quantity": 70,
        "minQuantity": 15,
        "type": "Perishable"
    },
    {
        "inventoryName": "inventory waste warehouse 3",
        "name": "Wood Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 150,
        "minQuantity": 30,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory waste warehouse 3",
        "name": "Cloth Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 170,
        "minQuantity": 35,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory waste warehouse 3",
        "name": "Rubber Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 190,
        "minQuantity": 40,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory waste warehouse 3",
        "name": "Electronic Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 210,
        "minQuantity": 45,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory waste warehouse 4",
        "name": "Construction Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 250,
        "minQuantity": 60,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory waste warehouse 4",
        "name": "Demolition Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 230,
        "minQuantity": 55,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory waste warehouse 4",
        "name": "Excavation Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 270,
        "minQuantity": 65,
        "type": "Non-Perishable"
    },
    {
        "inventoryName": "inventory waste warehouse 4",
        "name": "Concrete Waste",
        "category": "Waste",
        "expiryDate": "2025-12-31",
        "quantity": 290,
        "minQuantity": 70,
        "type": "Non-Perishable"
    },
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
    },
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
]


export async function POST(req:NextRequest) {

    const { dept } = await  req.json();
    const result = await Item.find({category : dept})
    
    return NextResponse.json({
        status: 200,
        message: "Items fetched successfully",
        data: result
    })
}