export default defineEventHandler((event) => {
  console.log('entra al coso')
  return {
    hello: 'Responde to GET /users/[...]',
  }
})