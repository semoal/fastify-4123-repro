import type { FastifyInstance } from "fastify";
import { usersRoutes } from "./users.routes";

export async function apiRoutes(
  server: FastifyInstance
): Promise<FastifyInstance> {
  server.register(usersRoutes, { prefix: "/users" });

  return server;
}
