import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Company } from "./entity/Company";
import { Worker } from "./entity/Worker";
import { Enrollment } from "./entity/Enrollment";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "dev",
  password: "dev01",
  database: "Nomina",
  synchronize: true,
  logging: true,
  entities: [User, Company, Worker, Enrollment]
})

export const Init = AppDataSource.initialize()