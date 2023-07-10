export interface Set {
  id: number
  name: String
  desc?: String
  musl_grp?: String

  num_sets?: number
  rest_in_sec?: number

  image?: String
};

// export type SecureUser = Omit<User, 'active'>
