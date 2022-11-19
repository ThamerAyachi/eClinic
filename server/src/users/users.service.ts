import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getMessage() {
    return { message: 'Hello bro!' };
  }
}
