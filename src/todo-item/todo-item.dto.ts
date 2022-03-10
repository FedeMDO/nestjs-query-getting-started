import {
  FilterableField,
  IDField,
  PagingStrategies,
  QueryOptions,
  Relation,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { WorkspaceDto } from '../workspace/workspace.dto';

@ObjectType('TodoItem')
@Relation('workspace', () => WorkspaceDto, { disableRemove: true })
@QueryOptions({ pagingStrategy: PagingStrategies.NONE })
export class TodoItemDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  title!: string;

  @FilterableField()
  completed!: boolean;

  @FilterableField(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;

  @FilterableField()
  workspaceId!: string;
}
