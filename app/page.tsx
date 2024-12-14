"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getMovies } from "@/api/getMovies";
import { Movie } from "@/types/movies";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {data?.results.map((movie: Movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <div>
              <h2>{movie.title}</h2>
              <p>Release: {movie.release_date}</p>
              <p>Rating: {movie.vote_average}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
