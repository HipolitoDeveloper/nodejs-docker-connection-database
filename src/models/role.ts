import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";

import {User} from './user'

export enum tipoPermissoes {
    ADM,   
    USU   
    }

  @Entity()
  export class Role {
      @PrimaryGeneratedColumn()
      id!: number;

      @Column()
      permissao!: tipoPermissoes;

      @OneToMany((_type) => User, (user: User) => user.role)
      users!: Array<User>;

  }
