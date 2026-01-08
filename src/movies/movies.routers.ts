import { Router } from "express";
import { getAllMovies, getMovieById } from "./movies.controller.js";

const router = Router();

/**
 * @openapi
 * /movies:
 *   get:
 *     summary: Get all movies
 *     responses:
 *       200:
 *         description: List of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   duration:
 *                     type: number
 *                   genre:
 *                     type: string
 */
router.get("/", getAllMovies);

/**
 * @openapi
 * /movies/{id}:
 *   get:
 *     summary: Get movie by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie found
 *       404:
 *         description: Movie not found
 */
router.get("/:id", getMovieById);

export default router;