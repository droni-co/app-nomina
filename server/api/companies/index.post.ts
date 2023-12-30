import { Init } from "~/db/data-source"
import { Company } from "~/db/entity/Company"
export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  //const company = (await Init).getRepository(Company).save(body)
  
  return {}
})