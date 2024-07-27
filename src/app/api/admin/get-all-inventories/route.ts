import { Inventory } from "@/models/Inventory";
import dbConnect from "@/lib/DbConnect";
import { NextResponse , NextRequest } from "next/server";
import mongoose from "mongoose";

export async function GET(req: NextRequest) {
    try {
      await dbConnect();
  
  
      const inventories = await Inventory.find()
 
  
      return NextResponse.json({ inventories });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to fetch inventories' }, { status: 500 });
    }
  }