import { searchProducts } from "@/services/catalog_service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const text = searchParams.get("text");
  return NextResponse.json(await searchProducts(text!));
}
