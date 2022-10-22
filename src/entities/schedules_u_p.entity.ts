import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { Properties } from "./properties.entitiy";

@Entity("schedules")
export class Schedules {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date: Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @ManyToOne(() => Properties)
  properties: Properties;
}
