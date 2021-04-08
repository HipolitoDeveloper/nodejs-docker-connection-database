import { getRepository } from "typeorm";
import { Role, tipoPermissoes } from "../models/role";

export interface IRolePayload { 
    permissoes: tipoPermissoes;
}

export const createRole = async (payload: IRolePayload): Promise<Role> => {
  const roleRepository = getRepository(Role);
  const role = new Role();
  return roleRepository.save({
    ...role,
    ...payload,
  });
};

