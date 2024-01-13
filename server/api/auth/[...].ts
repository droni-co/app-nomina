// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import GoogleProvider from "next-auth/providers/google";
export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/login'
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
<<<<<<< HEAD
  ]
=======
  ],
  callbacks: {
    session: async ({session, token}) => {
      if(token.email && token.name && token.picture) {
        const user = await (await Init).getRepository(User).findOne({
          where: {
            email: token.email
          }
        })
        if(user) {
          ;(session as any).dbuser = user;
        } else {
          const bodyUser = new User()
          bodyUser.name = token.name
          bodyUser.email = token.email
          bodyUser.avatar = String(token.picture)
          const nuser = await (await Init).getRepository(User).save(bodyUser)
          ;(session as any).dbuser = nuser;
        }
      }
      
      return Promise.resolve(session);
    },
  },
>>>>>>> parent of c701ff4 (create company)
})