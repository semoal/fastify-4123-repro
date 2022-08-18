import "dotenv-flow/config";
import process from "node:process";
import { startApp } from "./app";

const server = startApp();

server.listen(
  {
    host: process.env.SERVER_HOST || "127.0.0.1",
    port: 4000,
  },
  async (err) => {
    if (err) {
      server.log.fatal(err);
      process.exit(1);
    }

    console.log(
      server.printRoutes({
        commonPrefix: false,
      })
    );
  }
);
