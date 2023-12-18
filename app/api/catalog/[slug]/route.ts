import categories from "@/data/categories";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  return (await axios.get("http://127.0.0.1:8000/api/v1/categories/all_parent")).data;
}
