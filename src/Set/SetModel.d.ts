export interface Set {
  id: number
  name: String
  desc?: String
  musl_grp?: String

  num_sets?: number
  rest_in_sec?: number

  image?: String
  set: Set[]
};

export interface UnitSet {
  weight?: number
  rep?: number
}
// export type SecureUser = Omit<User, 'active'>
