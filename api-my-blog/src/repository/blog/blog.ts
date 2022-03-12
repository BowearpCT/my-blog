import { Blog } from "../../entity/Blog";
import { GetCriteria, GetOneCriteria } from "./criteria";
import { MongoRepository } from "typeorm";

export interface BlogRepositoryInterface {
  create(blog: Blog): Promise<boolean>;
  // get(criteria: GetCriteria): Promise<Blog[] | null>;
  // getOne(criteria: GetOneCriteria): Promise<Blog[] | null>;
}

export class BlogRepository implements BlogRepositoryInterface {
  collection: MongoRepository<Blog>;
  constructor(collection: MongoRepository<Blog>) {
    this.collection = collection;
  }

  async create(blog: Blog): Promise<boolean> {
    const result = await this.collection.save(blog);
    console.log(result);
    return true;
  }
}
