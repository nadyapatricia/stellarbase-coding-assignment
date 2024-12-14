import { NextResponse } from "next/server";
import { MovieResponse } from "@/types/movies";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: "API key is not defined" }, { status: 500 });
  }

  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch movies" }, { status: res.status });
  }

  const data: MovieResponse = await res.json();
  return NextResponse.json(data);
}
