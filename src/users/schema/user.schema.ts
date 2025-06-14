import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  lastName: string;
  
  @Prop({ type: String })
  email: string;

}

export const UserSchema = SchemaFactory.createForClass(User)