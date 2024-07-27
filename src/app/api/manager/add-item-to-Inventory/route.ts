import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import dbConnect from "@/lib/DbConnect";

export async function POST(req:NextRequest) {

 const {name , 
        category,
        expiryDate,
        quantity,
        receiver,
        minQuantity   } = await  req.json()

        

}