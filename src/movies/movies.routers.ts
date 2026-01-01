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
<<<<<<< HEAD
 *         description: A list of all movies.
=======
 *         description: A list of movies.
>>>>>>> 29207f7dd80bbe40e3beb4d3dd9c4feee3e2e832
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