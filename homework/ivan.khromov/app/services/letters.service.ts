import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class LettersService {

  constructor() { }



  public getLetters(letterType: string): Observable<any[]> {
    return Observable.create((obs) => {
      let letters = [];
      switch (letterType) {
        case 'inbox' : {
          letters = [
            {from: "ssuvorov@gmail.com", subject: "Жизненный цикл angular", body: "Angular полностью управляет процессами происходящими в компоненте и над ним: создание, рендеринг, связывание данных и удаление. Мы в свою очередь можем вклиниться в процесс с помощью хуков/триггеров (lifecycle hooks) для каждого из событий."},
            {from: "support@mailbox.com", subject: "MailBox", body: "We’re deeply grateful to everyone who helped bring Mailbox to life, whether by spreading the word, letting us know what you liked (and didn’t like), or just by using the product and teaching us through your actions. You taught us so much, and we’re grateful for it."},
            {from: "notify@js.ru", subject: "Добавлены материалы курса", body: "На страницу https://learn.javascript.ru/courses/groups/angular-20171012-2130/materials добавлены материалы. Вы можете скачать файл по прямой ссылке (если залогинены на сайте): lesson4_2017_10_30_2130."},
            {from: "sus@tinkoff.ru", subject: "Субботник — 39. Где деньги?", body: "Наш читатель дал 200 000 ₽ в долг под расписку. Деньги не вернули. Как вернуть свое через суд, даже если прошел срок исковой давности?"}
          ];          
          break;
        }
        default : {
          letters = [];
        }
      }

      obs.next(letters);

    });
  }

}

