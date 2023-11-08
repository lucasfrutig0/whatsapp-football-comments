export class BotMessage {
  private _message: string;

  get message() {
    return this._message;
  }

  set message(message: string) {
    this._message = message;
  }

  constructor(message: string) {
    this._message = message;
  }
}
