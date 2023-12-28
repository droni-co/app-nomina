import { AppDataSource } from "~/db/data-source"
export default defineEventHandler(async (event) => {
  
  const db = AppDataSource.initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
  })
  .catch((err) => {
      console.error("Error during Data Source initialization", err)
  })
  
  return {
    hello: 'Responde to GET /users/[...]',
  }
})