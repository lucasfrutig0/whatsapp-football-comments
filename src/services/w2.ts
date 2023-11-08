import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } from "../config";
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export async function sendWhatsAppMessage(to: string, message: string) {
  try {
    const response = await client.messages.create({
      body: "Your appointment is coming up on July 21 at 3PM",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+5517996536376",
    });
    console.log(`Message sent to ${to}: ${response.sid}`);
  } catch (error) {
    console.error(`Failed to send message: ${error}`);
  }
}
