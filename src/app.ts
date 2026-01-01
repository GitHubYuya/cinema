import express from "express";
import moviesRoutes from "./movies/movies.routers.js";
import { setupSwagger } from "./swagger/swagger.js";

const app = express();
app.use(express.json());

setupSwagger(app);

app.use("/movies", moviesRoutes);

export default app;