import { IMail } from './mail-list.models';

export interface StateMails {
    send: IMail[];
    inbox: IMail[];
    spam: IMail[];
    deleted: IMail[];
}
