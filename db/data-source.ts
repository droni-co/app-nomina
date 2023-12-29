import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Company } from "./entity/Company";
import { Worker } from "./entity/Worker";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "dev",
  password: "dev01",
  database: "nomina",
  synchronize: true,
  logging: true,
  entities: [User, Company, Worker],
  subscribers: [],
  migrations: [],
})