type User = {
  id: string
  email: string
}

type Ouser = Observable<User | null>;

type IDTOKEN = {
  iss: string
  sub: string
  aud: string
  exp: number
  iat: number
  name: string
  given_name: string
  family_name: string
  gender: string
  birthdate: string
  email: string
  picture: string
}