import { IUser } from './user.interface';

export interface ILetter {
  _id: string;
  subject: string;
  from?: IUser;
  to?: IUser;
}
