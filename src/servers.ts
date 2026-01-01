import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Movies service running on port ${PORT}`);
});