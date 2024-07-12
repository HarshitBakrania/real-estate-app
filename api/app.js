import express from "express"
import cors from "cors"
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.js"

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})