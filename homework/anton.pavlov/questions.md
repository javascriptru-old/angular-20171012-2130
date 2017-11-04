1. Где лучше помещать все subscribe() и обработку запросов? В сервисе или компоненте?
2. Где и как часто нужно указывать тип возвращаемого объекта? Например, вот здесь как будто что-то лишнее:

	public getLetterById(id: string): Observable<Letter> {
		return this._http.get<Letter>('http://test-api.javascript.ru/v1/*****/letter/' + id);
	}
	
3. Очень хотелось бы всё-таки увидеть скринкаст по созданию этого почтового клиента, чтобы появилось понимание, как правильно это делать, как нужно и как не нужно. У меня, например, возникло очень много неприятных и болевых ощущений при работе с тестовым api, в особенности это касалось заполнения базы и получения данных. В итоге у меня получились структуры из subscribe() внутри subscribe() внутри subscribe(). Так глубоко, мне кажется, даже ДиКаприо в Inception  не погружался. Например:

	constructor(private route: ActivatedRoute, private _mailService: MailService) {
    this.route.params.subscribe(params => {
      this.box = params['box'];
      this.getMailsForSelectedBox(this.box);
    });
	}

	public getMailsForSelectedBox(box: string) {
		this.letters = [];
		this._mailService.getAllLetters().subscribe(letters => {
			this._mailService.getMailBoxes().subscribe(mailboxes => {
				for (const mailbox of mailboxes) {
					if (mailbox.title === box) {
						for (const letter of letters) {
							if (letter.mailbox === mailbox._id) {
								this.letters.push(letter);
							}
						}
					}
				}
			});
		});
	}
	
Мне кажется, что здесь что-то не так.

4. Есть вероятность, что и с навигацией вышел перегруз, опять же, хотелось бы увидеть примеры эффективного выполнения этой задачи.

	const routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{path: 'home', redirectTo: 'home/mailbox/inbox', pathMatch: 'full'},
	{path: 'home', component: HomeComponent,
		children: [
		{path: 'mailbox', redirectTo: 'mailbox/inbox', pathMatch: 'full'},
		{path: 'mailbox', component: MailboxComponent,
			children: [
			{path: ':box', component: MailListComponent},
			{path: ':box/mail/:id', redirectTo: 'mail/:id', pathMatch: 'full'},
			{path: 'mail/:id', component: MailComponent}
			]},
		{path: 'contacts', component: UserCardListComponent},
		{path: 'settings', component: SettingsComponent},
		]},
	];
	
5. Очень сложно отлаживаться и искать ошибки и проблемные места. В большинстве случаев ты просто смотришь на экран, где что-то не случилось, не видишь ни единой ошибки, и совершенно не понимаешь, где вообще начинать копать. И на это уходит колоссальное количество времени.