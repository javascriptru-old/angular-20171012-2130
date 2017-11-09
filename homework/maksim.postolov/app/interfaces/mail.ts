export interface Mail {
  id?: string | number;
  from: string;
  to: string;
  date: Date;
  subject: string;
  body: string;
  boxType: string;
}
