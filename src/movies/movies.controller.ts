import { Request, Response } from "express";
import { movies } from "./movies.data";

export const getAllMovies = (req: Request, res: Response) => {
  res.json(movies);
};

export const getMovieById = (req: Request, res: Response) => {
  const movie = movies.find(m => m.id === req.params.id);
  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }
  res.json(movie);
};