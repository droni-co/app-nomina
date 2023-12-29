import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User"
import { Company } from "./Company"

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'int' })
  company_id?: number

  @Column({ type: 'varchar', length: 100 })
  name!: string

  @Column({ type: 'varchar', length: 20 })
  doctype!: string

  @Column({ type: 'varchar', length: 30 })
  document?: string

  @Column({ type: 'varchar', length: 100 })
  email?: string

  @Column({ type: 'varchar', length: 100 })
  phone?: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date | undefined

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date | undefined

  @ManyToOne(() => Company, company => company.workers)
  company?: Company
}