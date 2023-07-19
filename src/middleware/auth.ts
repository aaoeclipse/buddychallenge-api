import { Request, Response, NextFunction } from 'express'

export const auth = (_req: Request, _res: Response, next: NextFunction): undefined => {
  console.log('authorizing user!')
  next()
}
