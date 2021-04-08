import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { User } from "../models";
import {
  createUser,
  IUserPayload,
  getUser,
} from "../repositories/user";

@Route("users")
@Tags("User")
export default class UserController {
 
  @Post("/")
  public async createUser(@Body() body: IUserPayload): Promise<User> {
    return createUser(body);
  }

  @Get("/:id")
  public async getUser(@Path() id: string): Promise<User | null> {
    return getUser(Number(id));
  }
}