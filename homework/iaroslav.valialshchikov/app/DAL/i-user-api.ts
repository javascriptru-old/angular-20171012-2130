import { Observable } from 'rxjs/Rx';
import { User } from './user';

export interface IUserApi {
    getAll(): Observable<User[]>;

    delete(user: User): void;
}
