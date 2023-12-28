import dotenv from "dotenv";
import app from "./app";
dotenv.config();

const server = app.listen(process.env.APP_PORT, () => {
  console.log(`Gateway is running on http://localhost:${process.env.APP_PORT}`);
});

process.on("SIGINT", () => {
  server.close((error) =>
    console.log(`Closed server on http://localhost:${process.env.APP_PORT}`)
  );
});
