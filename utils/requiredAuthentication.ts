import { getSession } from "next-auth/react"

export const requiredAuthentication = async(context: any, cb: any) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return cb({session})
}
