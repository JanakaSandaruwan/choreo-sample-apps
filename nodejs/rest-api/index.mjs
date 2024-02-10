import app from "./app.mjs";

const PORT = parseInt(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
