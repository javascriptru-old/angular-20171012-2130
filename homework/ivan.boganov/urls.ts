const USERS_API_URL = 'http://test-api.javascript.ru/v1/iboganov/users';

export class Urls {
  public static getUsers = (): string => USERS_API_URL;
  public static deleteUser = (id: string): string => `${USERS_API_URL}/${id}`;
}
