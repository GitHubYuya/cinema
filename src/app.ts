import express from "express";
import moviesRoutes from "./movies/movies.routes";

const app = express();
app.use(express.json());

app.use("/movies", moviesRoutes);

export default app;