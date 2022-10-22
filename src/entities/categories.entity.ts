import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Properties } from "./properties.entitiy";

@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 64, unique: true })
  name: string;

  @OneToMany(() => Properties, (properties) => properties.category)
  properties: Properties[];
}
