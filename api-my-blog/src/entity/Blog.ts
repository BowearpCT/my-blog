import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class Blog {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  header: string;

  @Column()
  coverImageUrl: string;

  @Column()
  tags: string[];

  @Column()
  createdAt: Date;

  @Column()
  deletedAt: Date;

  @Column()
  updatedAt: Date;
}
