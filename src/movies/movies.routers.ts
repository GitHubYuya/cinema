import { Router } from "express";
import { getAllMovies, getMovieById } from "./movies.controller.js";

const router = Router();

/**
 * @openapi
 * /movies:
 *   get:
 *     summary: Get all movies
 *     parameters:
 *       - None
 *     responses:
 *       200:
 *         description: A list of movies.
 */
router.get("/", getAllMovies);

/**
 * @openapi
 * /movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     parameters:
 *       - in: movie id
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single movie.
 *       404:
 *         description: Movie not found.
 */
router.get("/:id", getMovieById);

export default router;