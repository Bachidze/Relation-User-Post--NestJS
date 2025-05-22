import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schema/post.schema';
import { isValidObjectId, Model } from 'mongoose';
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

 async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid post ID');
    const post = await this.PostSchema.findById(id).populate('user');
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid post ID');
    const updated = await this.PostSchema.findByIdAndUpdate(id, updatePostDto, {
      new: true,
    }).populate('user');

    if (!updated) throw new NotFoundException('Post not found');
    return updated;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid post ID');
    const deleted = await this.PostSchema.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Post not found');
    return { message: 'Post successfully deleted' };
  }
}
