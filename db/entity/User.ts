import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Company } from "./Company"
import { Enrollment } from "./Enrollment"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'varchar', length: 100 })
  name!: string

  @Column({ type: 'varchar', length: 100, unique: true })
  email?: string

  @Column({ type: 'varchar', length: 255 })
  image?: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date | undefined

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date | undefined

  @OneToMany(() => Enrollment, enrollment => enrollment.user)
  enrollments?: Enrollment[]
}