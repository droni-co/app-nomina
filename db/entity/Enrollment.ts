import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Company } from "./Company"
import { User } from "./User"

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'int'})
  companyId?: number

  @Column({ type: 'int'})
  userId?: number

  @Column({ type: 'varchar', length: 10, default: 'user' })
  role?: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date | undefined

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date | undefined

  @ManyToOne(() => Company, company => company.enrollments)
  company?: Company

  @ManyToOne(() => User, user => user.enrollments)
  user?: User
}