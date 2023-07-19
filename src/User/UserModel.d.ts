export interface User {
  id: number
  name?: string | null
  email: string
  active: boolean
};

export interface CreateUser extends User {
  password: string
}

export type SecureUser = Omit<User, 'active'>
