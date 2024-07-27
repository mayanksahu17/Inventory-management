import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/DbConnect";
import { Inventory } from "@/models/Invenroty";
import Item from "@/models/Item";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const {
            inventoryName,
            name,
            category,
            expiryDate,
            quantity,
            receiver,
            minQuantity,
        } = await req.json();

        // Input validation (optional but recommended)
        if (!inventoryName || !name || !category || !expiryDate || !quantity || !receiver || !minQuantity) {
            return NextResponse.json({
                success: false,
                message: "Missing required fields",
            }, { status: 400 });
        }

        const inventory = await Inventory.findOne({ name: inventoryName });

        if (!inventory) {
            return NextResponse.json({
                success: false,
                message: "Inventory not found",
            }, { status: 404 });
        }

        const item = await Item.create({
            name,
            category,
            expiryDate,
            quantity,
            receiver,
            minQuantity,
        });

        inventory.item.push(item); // Assuming items is an array in Inventory schema
        await inventory.save();

        return NextResponse.json({
            success: true,
            message: "Item added successfully",
            data: item,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "An error occurred",
        }, { status: 500 });
    }
}
