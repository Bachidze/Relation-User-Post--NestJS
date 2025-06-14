import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './schema/post.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[UsersModule,MongooseModule.forFeature([{name:Post.name,schema:PostSchema}])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
