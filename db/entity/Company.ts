import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User"
import { Worker } from "./Worker"

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'varchar', length: 100 })
  name!: string

  @Column({ type: 'varchar', length: 20 })
  nit!: string

  @Column({ type: 'varchar', length: 100 })
  email?: string

  @Column({ type: 'varchar', length: 100 })
  address?: string

  @Column({ type: 'varchar', length: 100 })
  phone?: string

  @Column({ type: 'varchar', length: 100 })
  website?: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date | undefined

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date | undefined

  @ManyToMany(() => User, user => user.companies)
  @JoinTable({ name: 'company_users' })
  users?: User[]

  @OneToMany(() => Worker, worker => worker.company)
  workers?: Worker[]
}