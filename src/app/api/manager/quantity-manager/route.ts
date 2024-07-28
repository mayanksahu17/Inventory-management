import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/DbConnect";
import mongoose from "mongoose";
import Notification from "@/models/Notifications";
import Item from "@/models/Item";

import InventoryManager from "@/models/I_manager";

export default async function quantityManager(notification:any) {
    try {
      await dbConnect()
  
      const receiverId = notification.acceptedBy;
  
      // Find the item associated with the receiver
      const specificItem = await Item.findOne({ receiverId });
  
      if (!specificItem) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
      }
  
      const storedQuantity = specificItem.quantity;
      const newQuantity = storedQuantity + notification.quantity; // Use sendQuantity from notification
  
      // Update receiver's item quantity
      specificItem.quantity = newQuantity;
      const updatedRecieverItemQuantity =await specificItem.save();

      if(!updatedRecieverItemQuantity){
        console.log("can't update reciever item ")
      }


      const senderId = notification.sender;
      const senderItem = await Item.findOne({ receiverId: senderId }); // Find sender's item
  
      if (senderItem) {
        const senderQuantity = senderItem.quantity - notification.quantity; // Subtract sent quantity
        senderItem.quantity = senderQuantity;
        await senderItem.save();
      }
        
      if(senderItem){
        console.log("sender item quantity updated")
      }
      
      return NextResponse.json({ message: "Notification accepted and quantity updated" });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
  }
  