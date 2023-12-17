import express from "express";
import conversionController from "./controllers/conversion.js";

const PORT = 5321;

class Application {

  useMiddleware() {
    this.app.use(express.json());
    this.app.use('/conversions', conversionController);
  }
  
  listen() {
    this.app.listen(PORT, () => { 
      console.log(`Server listening on http://localhost:${PORT}`);
    })
  }

  async main() {
    this.app = express();
    this.useMiddleware();
    this.listen();
  }
}

export default Application;