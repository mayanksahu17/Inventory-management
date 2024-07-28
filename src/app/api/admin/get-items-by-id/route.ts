import dbConnect from "@/lib/DbConnect";
import { NextResponse, NextRequest } from "next/server";
import Item from "@/models/Item";
import { Inventory } from "@/models/Inventory";

export async function POST( req: NextRequest) {
    
    const {name } = await req.json()
    const res = Inventory.find({name})
    
// console.log(res?.item);
    

    return NextResponse.json({
       data : res
    })
    
}