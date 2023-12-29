import { Init } from "~/db/data-source"
import { Company } from "~/db/entity/Company"
export default defineEventHandler(async (event) => {

  const companies = (await Init).getRepository(Company)
  .createQueryBuilder("company")
  .getMany()
  
  return companies
})