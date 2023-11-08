import { botSendMessage } from "../controllers/WhatsappBotController";
import { server } from "../index";

export async function WhatsAppRoute() {
  server.get("/", function (request, reply) {
    reply.send({ hello: "world ngrok" });
  });

  server.post("/incoming", botSendMessage);
}
