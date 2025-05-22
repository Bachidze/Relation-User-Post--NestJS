import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { Observable } from 'rxjs';

export class isValidUserId implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.headers['userid'];

    if (!userId)
      throw new BadRequestException('UserId header is required');

    if (!isValidObjectId(userId))
      throw new BadRequestException('Invalid Mongo ID format');

    request.userId = userId; 
    
    return true;
  }
}
