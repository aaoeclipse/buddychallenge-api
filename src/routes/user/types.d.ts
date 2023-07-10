export interface User {
  id: number
  name?: string | null
  email: string
  active: boolean
};

export type SecureUser = Omit<User, 'active'>
