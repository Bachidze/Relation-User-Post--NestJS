import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schema/post.schema';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private PostSchema:Model<Post> , private UserService:UsersService){}
  
 async  create(userId:string , createPostDto: CreatePostDto) {
    const user = await this.UserService.findOne(userId);
if (!user) throw new BadRequestException("Invalid user ID");

if("_id" in user){

  const post = await this.PostSchema.create({ ...createPostDto, user: user._id });
  return post;
}

  }

  findAll() {
    return this.PostSchema.find().populate("user")
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
