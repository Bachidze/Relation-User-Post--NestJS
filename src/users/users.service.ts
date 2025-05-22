import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { isValidObjectId, Model } from 'mongoose';
import { Iuser } from './user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel:Model<User>){}

  async create(createUserDto: CreateUserDto) {
    const isEmail = await this.UserModel.findOne({email:createUserDto.email})
    if(isEmail) throw new BadRequestException("email already exsist")
    const createUser = await this.UserModel.create(createUserDto)
    return createUser
  }

  findAll() {
    return this.UserModel.find()
  }

 async findOne(id: string): Promise<User | null> {
  if (!isValidObjectId(id)) throw new BadRequestException('Invalid ID');
  return this.UserModel.findById(id);
}

 async update(id: string, updateUserDto: UpdateUserDto) {

    if(!isValidObjectId(id)) throw new BadRequestException("id is invalid")
  const updatedUser = await this.UserModel.findByIdAndUpdate(id,updateUserDto,{new:true})
    return updatedUser
  }

async  remove(id: string) {
    if(!isValidObjectId(id)) throw new BadRequestException("id is invalid")
      const deletedUser = await this.UserModel.findByIdAndDelete(id)
    return deletedUser || {message:"this is not mongo valid id"}
  }
}
