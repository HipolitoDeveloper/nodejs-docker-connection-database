import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Adress } from "../models";
import {
  getAdresses,
  IAdressPayload,
  createAdress,
} from "../repositories/adress";

@Route("adress")
@Tags("adress")
export default class AdressController {
 
  @Post("/")
  public async createAdress(@Body() body: IAdressPayload): Promise<Adress> {
    return createAdress(body);
  }

  @Get("/:userId")
  public async getAdresses(@Path() userId: string): Promise<Adress | null> {
    return getAdresses(Number(userId));
  }
}