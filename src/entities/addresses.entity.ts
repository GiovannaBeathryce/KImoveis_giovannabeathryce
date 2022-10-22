import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Addresses {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 128 })
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 10 })
  number: string;

  @Column({ length: 128 })
  city: string;

  @Column({ length: 2 })
  state: string;
}
