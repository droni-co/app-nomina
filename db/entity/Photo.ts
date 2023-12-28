import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'varchar', length: 100 })
  name: string

}