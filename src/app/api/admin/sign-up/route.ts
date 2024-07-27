import dbConnect from "@/lib/DbConnect";
import Admin from "@/models/Admin";
import { NextRequest, NextResponse } from "next/server";
import WarehouseManager from "@/models/W_manager"; // Unused import?
import bcrypt from "bcryptjs"; // Corrected import for bcrypt

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { name, email, password  } = await req.json();

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
    const existingWarehouseManager = await Admin.findOne({    $or: [{ name }, { email }],});
    if (existingWarehouseManager) {
      return NextResponse.json({ message: "Email already exists" }, { status: 409 });
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(email)
  
    const warehouseManager = await Admin.create({
      name,
      email:email,
      password: hashedPassword,
      
    });

    console.log(email)

    return NextResponse.json({
      message: "admin account  created successfully",
      warehouseManager,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
