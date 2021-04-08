import { getRepository } from "typeorm";
import { Adress } from "../models";

export interface IAdressPayload { 
    endereco: string;
    numero: number;
    complemento: string;
    cep: string;
    cidade: string;
    estado: string;
    userId: number;
}

export const createAdress = async (payload: IAdressPayload): Promise<Adress> => {
  const adressRepository = getRepository(Adress);
  const adress = new Adress();
  return adressRepository.save({
    ...adress,
    ...payload,
  });
};

export const getAdresses = async (userId: number): Promise<Adress | null> => {
  const adressRepository = getRepository(Adress);
  const adress = await adressRepository.findOne({ userId: userId });
  if (!adress) return null;
  return adress;
};