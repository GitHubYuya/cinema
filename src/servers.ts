import app from "./app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Movies service running on port ${PORT}`);
  console.log(`swagger running on ${PORT}/api-docs`);
});