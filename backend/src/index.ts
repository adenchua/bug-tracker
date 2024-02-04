import dotenv from "dotenv";
import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import { API_PREPEND, PROXY_STATIC_FOLDER, STATIC_FOLDER } from "./configs/generalConfig";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import mediaRouteV1 from "./routes/v1/mediaRoute";
import swaggerHelper from "./utils/swaggerHelper";

dotenv.config();
const PORT = process.env.SERVER_PORT || 5000;
const app: Express = express();

app.use(helmet()); // secure app by setting http response headers
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // parses urlencoded bodies with qs library
app.use(morgan("combined")); // outputs a rich apache standard logging for every request made

app.use(`${API_PREPEND}/v1/media`, mediaRouteV1.router);

// static served report attached media
app.use(`/${PROXY_STATIC_FOLDER}`, express.static(STATIC_FOLDER));

app.use(errorHandlerMiddleware.errorHandler); // custom error handling middleware registered

// sets up swagger UI for api specifications, accessible via /docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerHelper.getSwaggerDocument()));

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
