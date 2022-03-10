import {
  FilterableField,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Workspace')
@QueryOptions({ pagingStrategy: PagingStrategies.NONE })
export class WorkspaceDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;

  @FilterableField(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
