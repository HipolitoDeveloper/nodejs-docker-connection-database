import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Role } from "../models/role";
import {  
  IRolePayload,
  createRole,
} from "../repositories/role";

@Route("role")
@Tags("role")
export default class RoleController {
 
  @Post("/")
  public async createRole(@Body() body: IRolePayload): Promise<Role> {
    return createRole(body);
  }

 
}