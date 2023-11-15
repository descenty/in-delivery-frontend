import categories from "@/data/categories";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  return NextResponse.json(categories.find((category) => category.slug === params.slug)?.products);
}
