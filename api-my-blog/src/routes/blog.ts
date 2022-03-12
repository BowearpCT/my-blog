import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { createHandler } from "../handler/blog";

export const blogRoute = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: any
) => {
  fastify.post("/", createHandler);
  done();
};
