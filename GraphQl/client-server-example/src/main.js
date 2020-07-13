import { createServer } from "http";
import { hostname } from "http";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/status": {
      response.writeHead(2000);
      response.write("Okay");
      response.end();
      break;
    }
    default: {
      response.writeHead(400, "Service not found");
      response.end();
    }
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening start on port http://127.0.0.1:${PORT}`);
});
