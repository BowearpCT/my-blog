import { getMongoRepository } from "typeorm";
import { Blog } from "../entity/Blog";
import { BlogRepository } from "../repository/blog/blog";
import { createBlog } from "../usecase/blog";

export const createHandler = async (request, reply) => {
  const collection = getMongoRepository(Blog);
  const blogRepository = new BlogRepository(collection);
  const blog = request.body;
  const result = createBlog(blog, { blogRepository });
  reply.send({ success: result });
};
