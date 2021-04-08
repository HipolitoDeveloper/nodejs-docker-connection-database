
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
    ManyToMany
  } from "typeorm";

  import {Role} from "./role";
  import {Adress} from "./adress";
  
  export enum etinia {
    PRETO,
    PARDO,
    BRANCO,
    AMARELO
  }
 
  @Entity()
  export class User {

      @PrimaryGeneratedColumn()
      id!: number;

      @Column()
      nome!: string;

      @Column()
      telefone!: string;

      @Column()
      email!: string;

      @Column()
      idade!: number;

      @Column()
      peso!: number;

      @Column()
      etinia!: etinia;

      @OneToMany((_type) => Adress, (adress: Adress) => adress.user)
      adresses!: Array<Adress>;

      @Column()
      roleId!: number;
      @ManyToOne((_type) => Role, (role: Role) => role.users)
      @JoinColumn()
      role!: Role;

  }
