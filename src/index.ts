import fastify from "fastify";
import formBody from "@fastify/formbody";

import { PORT } from "./config";
import { WhatsAppRoute } from "./routes/whatsapp-bot";
export const server = fastify();

// Declare a route
server.register(WhatsAppRoute);
// server.register(formBody);

// Run the server!
server.listen({ port: Number(PORT) || 3020 }, function (err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  console.log(`Server is now listening on ${address}`);
});
