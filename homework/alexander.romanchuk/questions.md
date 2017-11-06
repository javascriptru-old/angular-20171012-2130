1) Failed to compile.

TypeError: Cannot read property 'getSourceFile' of null
    at WebpackCompilerHost.getSourceFile (C:\work\projects\Angular\test\mailBox\node_modules\@ngtools\webpack\src\compiler_host.js:191:37)
    at tryReuseStructureFromOldProgram (C:\work\projects\Angular\test\mailBox\node_modules\typescript\lib\typescript.js:67246:28)
    at Object.createProgram (C:\work\projects\Angular\test\mailBox\node_modules\typescript\lib\typescript.js:67017:14)
    at _donePromise.Promise.resolve.then.then (C:\work\projects\Angular\test\mailBox\node_modules\@ngtools\webpack\src\plugin.js:417:32)
    at process._tickCallback (internal/process/next_tick.js:109:7)
	
Как понять из стэктрэйса, в чем проблема?
	
2) Можно ли полностью абстрагировать получение данных в сервисе?
Т.е. если сначала сервис использовал статические данные, а затем данные из http - возможно ли организовать сервис так, чтобы не нужно было изменять код, который использует этот сервис?
В случае с http - приходится везде изменять код на использование subscribe.

return Promise.resolve(users);
return Observable.of(users);

3) как осуществлять переход на другой стейт из метода, расположенного в ts файле?

navigate
navigateByUrl

4) Для построения компонента с заголовками писем, мы получаем список всех писем из сервиса.
Чтобы открыть выбранное письмо - можно ли передать объект из этого списка без повторного запроса в сервис?

[..,1,...]  => 1*

cache;
getAll() {
  if(!cache) {
    cache = http.get();
  }  
  return cache;
}

5) есть ли нормальный дебаггер для Angular?

6) не совсем понятно, как реализовать табы/закладки. Было бы здорово увидеть простой пример (без использований готовых компонентов UI).

<ul>
  <li routerLink="" [ngClass]="isActive()">Users</li>
  <li routerLink="" routerLinkActive="">Mails</li>
</ul>