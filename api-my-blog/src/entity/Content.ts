import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class Content {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  blogId: string;

  @Column()
  order: number;

  @Column()
  contentType: string;

  @Column()
  topic: string;

  @Column()
  code: string;

  @Column()
  message: string;

  @Column()
  imageUrl: string;
}
