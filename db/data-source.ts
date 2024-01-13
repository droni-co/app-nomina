import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Company } from "./entity/Company";
import { Worker } from "./entity/Worker";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "dev",
  password: "dev01",
  database: "Nomina",
  synchronize: false,
  logging: false,
  entities: [User, Company, Worker]
})

export const Init = AppDataSource.initialize()