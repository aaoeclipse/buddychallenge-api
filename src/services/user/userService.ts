import { SecureUser, User } from '../../routes/user/types'
import usersData from '../../data/user/user.json'
import { prisma } from '../../db/db'

const users: User[] = usersData as User[]

export const getEntries = (): User[] => users

export const findUserById = async (id: number): Promise<SecureUser | null> => {
  const user = await prisma.user.findFirst({
    where: {
      id
    }
  })
  if (user != null) {
    const { active, ...secureUser } = user
    return secureUser
  } else return user
}

export const getSecureEntries = async (): Promise<SecureUser[]> => {
  const usersdb = await prisma.user.findMany()
  return usersdb.map(({ id, name, email }) => {
    return {
      id,
      name,
      email
    }
  })
}

export const addUser = async (newUser: User): Promise<User | undefined> => {
  newUser.id = 0
  newUser.active = true
  const user = await prisma.user.create({
    data: {
      name: newUser.name,
      email: newUser.email,
      active: true
    }
  })
  return user
}
