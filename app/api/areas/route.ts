import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([]);
  // try {
  //   console.log("Fetching areas");
  //   const data = await fetch(`${process.env.API_URL}/areas`, {
  //     cache: "no-cache",
  //   });
  //   return NextResponse.json(await data.json());
  // } catch (e) {
  //   console.log("Error fetching areas");
  //   return NextResponse.error();
  // }
}
