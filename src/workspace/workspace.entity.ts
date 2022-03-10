import { TodoItemEntity } from 'src/todo-item/todo-item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class WorkspaceEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @OneToMany(() => TodoItemEntity, (todoItem) => todoItem.workspaceId)
  todoItems!: TodoItemEntity[];

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}
