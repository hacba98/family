// Entry point - Running server
import Express from "express";
import compression from "compression";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import passport from "passport";
import morgan from "morgan";

// Load some config
import config from "./config";

// Load api
import auth from "./routes/auth.routes";
import post from "./routes/post.routes";

const app = new Express();

// Body parser middleware
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(Express.static(path.resolve(__dirname, "../dist/client")));
app.use("/auth", auth);
app.use("/post", post);

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
if (process.env.NODE_ENV !== "test") {
  mongoose
    .connect(config.mongoURL)
    .then(() => console.log("MongoDB is connected."))
    .catch(err => console.log(err));
}

// passport middleware
app.use(passport.initialize());
// passport config
import { passportConfig } from "./validation/passport";
passportConfig(passport);

// start app
app.listen(config.port, error => {
  if (!error) {
    console.log(`Server is running on port: ${config.port}!`);
  }
});
// Serve web
// app.use(Express.static(path.join(__dirname, "/../client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/../client/build", "index.html"));
// });

export default app;
