import mongoose from "mongoose";

export class Iuser {
    _id:mongoose.Schema.Types.ObjectId

      name: string;
    
      lastName: string;
      
      email: string;
    
}