import dbConnect from "@/lib/DbConnect";
import { NextRequest, NextResponse } from "next/server";
import Supplier from "@/models/Supplier";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'; // Import for JWT token generation
import cookie from 'cookie';
export async function POST(req: NextRequest) {
  try {
    
    await dbConnect();

    const { email, password } = await req.json();

    // Input validation
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    // Find the user
    const supplier = await Supplier.findOne({ email });
    if (!supplier) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, supplier.password);
    if (!isPasswordMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign({ id: supplier._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    const response = NextResponse.json({
        success: true,
        message: "Signed in successfully!",
        token,
        data : supplier
      });
  
      response.headers.set('Set-Cookie', cookie.serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600,
        path: '/',
      }));
      return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
