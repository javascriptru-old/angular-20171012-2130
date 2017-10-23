export interface IUser {
  id: number;
  data: IUserData
}

export interface IUserData {
  email: string;
  fullName: string;
  phone?: string;
  thumb?: string;
}
