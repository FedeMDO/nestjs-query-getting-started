import { WorkspaceEntity } from 'src/workspace/workspace.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  ObjectType,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TodoItemEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  title!: string;

  @Column()
  completed!: boolean;

  @Column({ nullable: false })
  workspaceId!: string;

  @ManyToOne(
    (): ObjectType<WorkspaceEntity> => WorkspaceEntity,
    (ws) => ws.todoItems,
    { onDelete: 'CASCADE', nullable: false },
  )
  @JoinColumn()
  workspace!: WorkspaceEntity;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}
