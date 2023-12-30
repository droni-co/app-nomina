import { Init } from "~/db/data-source"
import { Company } from "~/db/entity/Company"
import { User } from "~/db/entity/User"
import { Enrollment } from "~/db/entity/Enrollment"
import { getServerSession } from '#auth'
export default defineEventHandler(async (event) => {

  const session = await getServerSession(event)
  const dbuser = (session as any).dbuser as User
  const body = await readBody(event)

  const dataCompany = new Company()
  dataCompany.name = body.name
  dataCompany.address = body.address
  dataCompany.email = body.email
  dataCompany.nit = body.nit
  dataCompany.phone = body.phone
  dataCompany.website = body.website

  const company = await (await Init).getRepository(Company).save(dataCompany)

  const enrollment = new Enrollment()
  enrollment.companyId = company.id
  enrollment.userId = dbuser.id
  enrollment.role = 'owner'
  await (await Init).getRepository(Enrollment).save(enrollment)
  
  return company
})