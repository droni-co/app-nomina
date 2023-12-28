import { DataSource } from "typeorm";
import { Photo } from "./entity/Photo";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "nomina",
  synchronize: true,
  logging: true,
  entities: [Photo],
  subscribers: [],
  migrations: [],
})