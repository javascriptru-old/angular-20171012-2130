1) В скринкасте про сервисы, когда мы переносим массив из header в service, почему мы переменную
  _userService определяем в конструкторе, а сам массив определяем в хуке ngOnInit()? Почему мы не
  можем определить массив например сразу за занесением сервиса в переменную? Вот так:
  constructor(userService: UserService){
    this._userService = userService;

    this.users=userService.getAll();
    или
    this.users=this._userService.getAll();

  }

2) В методах(допустим сервиса) в параметрах, если мы передаем объект, тип параметра
не указывается? Указываются только примитивы?
public remove(user: TUser): Observable<string>{

3) Зачем мы переопределяем массив users:
   this._userService.add(name);
   this.users = this._userService.getAll();

4) В TS в массивах нужно иметь именно идентичные по структуре объекты? Я не смог добавить объект,
пол был указан не в числовом виде(т.е. не obj.sex=1, а obj.sex="1") и вылезала ошибка. Файл
user.service.ts строка 79(но это не точно), в методе public add(user){};

5) При удалении с сервера http://test-api.javascript.ru/v1/klyukovkin/users выдает ошибку
(user-list.component.ts строка 46),
но объект из массива на сервере тем не менее удаляется. Почему

Unexpected token o in JSON at position 0 at Object.parse


6) Не совсем понятно, что такое observable, можете подробнее объяснить пожалуйста?

RxJS