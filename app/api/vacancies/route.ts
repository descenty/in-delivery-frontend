import { NextResponse } from "next/server";

export async function GET({ params }: { params: { page: number } }) {
  try {
    console.log("Fetching vacancies");
    const data = await fetch(
      `${process.env.API_URL}/vacancies?page=${params.page}`,
      {
        cache: "no-cache",
      }
    );
    return NextResponse.json(await data.json());
  } catch (e) {
    console.log("Error fetching vacancies");
    return NextResponse.error();
  }
}
