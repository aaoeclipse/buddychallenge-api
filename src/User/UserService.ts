import { CreateUser, SecureUser, User } from './UserModel'
import usersData from '../data/user/user.json'
import { prisma } from '../db/db'
import * as bcrypt from 'bcrypt'

const users: User[] = usersData as User[]
const saltRounds = 8

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

export const addUser = async (newUser: CreateUser): Promise<User | undefined> => {
  newUser.id = 0
  newUser.active = true

  const user = await prisma.user.create({
    data: {
      name: newUser.name,
      email: newUser.email,
      password: await bcrypt.hash(newUser.password, saltRounds),
      active: true
    }
  })
  return user
}

export const loginUser = async (email: string, pass: string): Promise<User | undefined> => {
  try {
    const user = await findUserByEmail(email)
    if (user !== null) {
      const { password, active, ...userSafe } = user
      const matching = bcrypt.compareSync(pass, user.password)
      if (matching) return userSafe as User; else throw new Error('Email or password is not correct')
    } else {
      throw new Error('Email or password is not correct')
    }
  } catch (error) {
    console.log('[-] Error on hashpass')
    throw new Error('Email or password is not correct')
  }
}

const findUserByEmail = async (email: string): Promise<CreateUser | null> => {
  const user = await prisma.user.findFirst({
    where: {
      email
    }
  })
  return user
}
