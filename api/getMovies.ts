export const getMovies = async () => {
  const res = await fetch("/api/movies");

  if (!res.ok) {
    throw new Error("Failed to fetch movies from the API route");
  }

  return res.json();
};
