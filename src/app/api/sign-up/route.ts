import dbConnect from "@/lib/DbConnect";
import { NextRequest, NextResponse } from "next/server";
import InventoryManager from "@/models/I_manager"; // Import once
import bcrypt from "bcryptjs"; // Corrected import for bcrypt

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { name, email, password , location } = await req.json();

    // Input validation
    if (!name || !email || !password ) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Email validation (basic check, consider more robust validation)
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }

    // Password strength check (optional, adjust criteria as needed)
    if (password.length < 8) {
      return NextResponse.json({ message: "Password must be at least 8 characters" }, { status: 400 });
    }

    // Check for duplicate email
    const existingInventoryManager = await InventoryManager.findOne({    $or: [{ name }, { email }],});
    if (existingInventoryManager) {
      return NextResponse.json({ message: "Email already exists" }, { status: 409 });
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(email)
  
    const inventoryManager = await InventoryManager.create({
      name,
      email:email,
      password: hashedPassword,
      location
    });

    console.log(email)

    return NextResponse.json({
      message: "InventoryManager account  created successfully",
      inventoryManager,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
