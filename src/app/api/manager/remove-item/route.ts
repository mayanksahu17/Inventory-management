import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/DbConnect";
import Item from "@/models/Item";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { itemId } = await req.json();

    const item = await Item.findByIdAndDelete(itemId);

    if (!item) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
