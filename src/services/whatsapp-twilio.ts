import Twilio from "twilio";
import { PHONE_NUMBER, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } from "../config";
import { ApiService } from "./api-service";

export class TwilioWhatsappBot {
  private client: Twilio.Twilio;
  private getFixturesOfTheDay = new ApiService();
  // private getFixturesOfTheDay: new ApiService();

  constructor() {
    const accountSid = TWILIO_ACCOUNT_SID;
    const authToken = TWILIO_AUTH_TOKEN;
    this.client = Twilio(accountSid, authToken);
  }

  async sendWhatsAppMessage(body: string, to: string): Promise<string> {
    try {
      // const data = await this.getFixturesOfTheDay.get(
      //   "https://v3.football.api-sports.io/fixtures?league=71&season=2023&date=2023-11-08&timezone=America/Sao_Paulo",
      //   {
      //     "x-rapidapi-host": process.env.API_HOST as string,
      //     "x-rapidapi-key": process.env.API_SCRT as string,
      //   }
      // );
      const message = await this.client.messages.create({
        from: `whatsapp:${PHONE_NUMBER}`,
        body,
        to: `whatsapp:${to}`,
      });
      return message.body;
    } catch (error) {
      console.error(`Error sending WhatsApp message: ${error}`);
      throw error;
    }
  }
}
