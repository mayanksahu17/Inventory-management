import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/DbConnect";
import mongoose from "mongoose";
import Notification from "@/models/Notifications";
import { jwtVerify } from "jose";
import InventoryManager from "@/models/I_manager";

export async function POST(req: NextRequest) {
    await dbConnect();

    // Parse JSON data from the request
    const { token, message, mode } = await req.json();

    // Verify the JWT token
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET as string));
    
    // Find the inventory manager by ID from the token payload
    const inventoryManager = await InventoryManager.findById(payload.id);
    if (!inventoryManager) {
        return NextResponse.json({ error: "Manager not found" }, { status: 404 });
    }
    
    // Create a new notification
    const notification = await Notification.create({
        message,
        mode,
        inventoryManager: inventoryManager._id,
        sender: inventoryManager.name,
    })
    console.log(payload);

    // Query all managers
    const allManagers = await InventoryManager.find();

    // Push the notification to all managers
    allManagers.forEach(async (manager : any) => {
// Create a new notification for each manager
        if (manager._id.equals(inventoryManager._id)) {
            return; // Skip the sender
        }

        manager.notifications.push(notification._id);
        await manager.save();
    });

    // Return a successful response
    return NextResponse.json({ message: "Notification created and sent to all managers" });
}
