import type { FastifyInstance } from "fastify";
import { search } from "src/bll/v1/users.bll";

export async function usersRoutes(
  server: FastifyInstance
): Promise<FastifyInstance> {
  server.get("/search", {}, search);

  return server;
}
