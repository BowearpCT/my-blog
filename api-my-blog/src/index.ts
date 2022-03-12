import fastify from "fastify";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { blogRoute } from "./routes/blog";

(async () => {
  const server = fastify();
  interface IQuerystring {
    username: string;
    password: string;
  }

  await createConnection();
  interface IHeaders {
    "h-Custom": string;
  }

  server.get("/ping", async (request, reply) => {
    return "pong\n";
  });
  console.log("starting...");

  server.get<{
    Querystring: IQuerystring;
    Headers: IHeaders;
  }>(
    "/auth",
    {
      preValidation: (request, reply, done) => {
        const { username, password } = request.query;
        done(username !== "admin" ? new Error("Must be admin") : undefined); // only validate `admin` account
      },
    },
    async (request, reply) => {
      const { username, password } = request.query;
      const customerHeader = request.headers["h-Custom"];
      return `logged in!`;
    }
  );

  server.register(blogRoute, { prefix: "/blog" });

  server.listen(8080, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})();