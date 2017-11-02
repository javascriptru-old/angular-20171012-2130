export class Letter {
  id: string;
  subject: string;
  body: string;
  type: string;

  public constructor(id: string, subject: string, body: string, type: string){
    this.id = id;
    this.subject = subject;
    this.body = body;
    this.type = type;
  }
}
