import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.js";
import postRoute from "./routes/post.js";
import chatRoute from "./routes/chat.js";
import messageRoute from "./routes/message.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

if (process.env.NODE_ENV !== "production") {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
