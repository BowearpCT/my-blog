import { User } from "../entity/User.entity";
import { Blog } from "../entity/Blog";
import { BlogRepositoryInterface } from "../repository/blog/blog";

export const createBlog = async (
  blog: Blog,
  repo: {
    blogRepository: BlogRepositoryInterface;
  }
): Promise<boolean> => {
  const createResult = await repo.blogRepository.create(blog);
  return createResult;
};
