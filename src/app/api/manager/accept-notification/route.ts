import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/DbConnect";
import mongoose from "mongoose";
import Notification from "@/models/Notifications";
import Item from "@/models/Item";
import quantityManager from "../quantity-manager/route";
import { jwtVerify } from "jose";
import InventoryManager from "@/models/I_manager";

export async function POST(req: NextRequest) {
    await dbConnect();

    // Parse JSON data from the request
    const { token, notificationId } = await req.json();

    // Verify the JWT token
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET as string));
    
    // Find the inventory manager by ID from the token payload
    const inventoryManager = await InventoryManager.findById(payload.id);
    if (!inventoryManager) {
        return NextResponse.json({ error: "Manager not found" }, { status: 404 });
    }
    
    // Find the notification by ID
    const notification = await Notification.findById(notificationId);
    if (!notification) {
        return NextResponse.json({ error: "Notification not found" }, { status: 404 });
    }

    // Mark the notification as accepted
    notification.isAccepted = true;
    const notificationSaved = await notification.save();
    
    
    if(notification.isAccepted){
        quantityManager(notification)
    }
    else{
        return null
    }
    
    // Return a successful response
    return NextResponse.json({ message: "Notification accepted" });
}
