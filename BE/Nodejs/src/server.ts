import dotenv from "dotenv";
import app from "./app";
import { CONFIG } from "./configs";
dotenv.config();

app.listen(CONFIG.APP.PORT, () => {
  console.log(`App listening on ${CONFIG.APP.PORT}`);
});

process.on("SIGINT", () => {
  console.log(`Server is the close on Port ${CONFIG.APP.PORT}`);
});
