
1. entry.component.ts : 20 - это правильная навигация? по клику делаю router.navigate(['mailbox'+id])?, сначала делал <a href='/mailbox/:id'> - я так понимаю это не правильно, оно перегружает страницу 
2. correct way to submit the form?
   
      <form action="" (submit)="onSubmit()">
         <input type="text" placeholder="email">
         <button type="submit">Go</button>
       </form>
       
       returns warning: Form submission canceled because the form is not connected
