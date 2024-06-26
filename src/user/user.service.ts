import { Injectable } from '@nestjs/common';
import { users } from "../mocks/index";

@Injectable()
export class UserService {
  getUsers() {
    return users;
  }
}
