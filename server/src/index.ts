import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { connectDB } from "./db/connectDB";
import { MONGODB_URL, PORT } from "./utils/config";
import { routes } from "./routes/routes";

// Create express app instance
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(
  helmet({ contentSecurityPolicy: false, crossOriginResourcePolicy: false })
);
app.use("/api/v1", routes);

// Connect to mongo database
connectDB(MONGODB_URL);
//Server Landing Page
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to an express application by Ameh Solomon Onyeke");
});

app.listen(PORT, () => {
  // console.log(`Server running at http://localhost:${PORT}/`);
});
