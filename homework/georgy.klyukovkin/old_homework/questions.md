1) Файл user-card.component.html, 5ая строка. Пытаюсь сделать так,
 чтобы кнопка удаления была только тогда, когда выделена карточка.
 <button *ngIf="user.name==selectedName" (click)="deleteUser(user)">delete</button>
 Для этого завел отдельную переменную selectedName
 Соответственно в тс сделал вот так:

   public selectedName: string;
   public selectUser(name){
       this.selectedName=name;
       this.selectedUser.emit();
   }

   Правильно ли это? В родительском компоненте есть свойство selectedUser, в котором
   хранится выбранный объект user, хотелось бы сравнивать с ним, то есть
   <button *ngIf="user.name==/*parentComponent.*/selectedUser" (click)="deleteUser(user)">delete</button>
