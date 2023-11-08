import { FastifyReply, FastifyRequest } from "fastify";
import { TwilioWhatsappBot } from "../services/whatsapp-twilio";

const twilioHelper = new TwilioWhatsappBot();

export async function botSendMessage(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const messageSid = await twilioHelper.sendWhatsAppMessage(
      "Hello from Twilio WhatsApp API!",
      "+5517996536376"
    );
    reply.header("Content-Type", "text/xml");
    // Faça algo com o SID da mensagem, se necessário
    reply.code(200).send(messageSid);
  } catch (error) {
    reply.code(500).send({ message: "Internal Server Error" });
    console.error("Ocorreu um erro ao enviar a mensagem via WhatsApp:", error);
  }
}
