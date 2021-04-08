import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";

  import {User} from './user'
  @Entity()
  export class Adress {
      @PrimaryGeneratedColumn()
      id!: number;

      @Column()
      endereco!: string;

      @Column()
      numero!: number;

      @Column()
      complemento!: string;

      @Column()
      cep!: string;

      @Column()
      cidade!: string;

      @Column()
      estado!: string;

      @Column()
      userId!: number;
      @ManyToOne((_type) => User, (user: User) => user.adresses)
      @JoinColumn()
      user!: User;


    

  }
