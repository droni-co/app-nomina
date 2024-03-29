import { Init } from "~/db/data-source"
import { Company } from "~/db/entity/Company"
import { User } from "~/db/entity/User"
import { getServerSession } from '#auth'
export default defineEventHandler(async (event) => {

  const session = await getServerSession(event)
  const dbuser = (session as any).dbuser as User
  console.log(dbuser)


  const companies = (await Init).getRepository(Company)
  .createQueryBuilder("company")
  .leftJoinAndSelect("company.users", "users")
  .where("users.id = :id", { id: dbuser.id })
  .getMany()
  
  return companies
})