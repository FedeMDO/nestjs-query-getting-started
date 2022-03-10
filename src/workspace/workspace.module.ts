import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { WorkspaceDto } from './workspace.dto';
import { WorkspaceEntity } from './workspace.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([WorkspaceEntity])],
      resolvers: [{ DTOClass: WorkspaceDto, EntityClass: WorkspaceEntity }],
    }),
  ],
})
export class WorkspaceModule {}
