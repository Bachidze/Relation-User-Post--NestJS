import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/users/schema/user.schema";

@Schema({timestamps:true})
export class Post {
     @Prop({ type: String })
      title: string;
    
      @Prop({ type: String })
      content: string;
      
      @Prop({ type: mongoose.Schema.Types.ObjectId, ref:User.name })
      user: mongoose.Schema.Types.ObjectId

}

export const PostSchema = SchemaFactory.createForClass(Post)