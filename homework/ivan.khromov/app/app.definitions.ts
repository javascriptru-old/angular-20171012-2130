
/** Тип 'пользователь' на сервере. _id может отсутствовать при выполнении post, т.к. он генерируется сервером */
export interface IUser {
    _id?: string;
    fullName: string;
    email: string;
    avatarUrl: string;
    address: string;
    birthdate: any;
}

export interface IUserModel {
    isSelected?: boolean;
    rowUser: IUser;
}
