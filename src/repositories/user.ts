import { getRepository, getConnection, createQueryBuilder } from "typeorm";
import { User, Adress } from "../models";
import { etinia} from "../models/user"


export interface IUserPayload { 
    nome: string;
    telefone: string;
    email: string;
    idade: number;
    peso: number;
    etinia: etinia;
    roleId: number;
}

export const createUser = async (payload: IUserPayload): Promise<User> => {
  const userRepository = getRepository(User);
  const user = new User();
  return userRepository.save({
    ...user,
    ...payload,
  });
};

export const getUser = async (id: number): Promise<User | null> => {
  const user = await getRepository(User).createQueryBuilder("user")
                      .leftJoinAndSelect("user.adresses", "adress")
                      .leftJoinAndSelect("user.role", "role")
                      .where("user.id =:id", {id: id}).getOne(); 
  if (!user) return null;
  return user;
};