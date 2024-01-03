import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"
import schoolRoutes from "./routes/schoolRoutes";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))

// id- int AUTO_INCREMENT name- text address- text city- text state- text contact- number image- text email_id- text
app.use("/school", schoolRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
