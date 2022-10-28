import "reflect-metadata";
import "express-async-errors";
import express from "express";

import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import hadleErrorMiddleware from "./middlewares/handleError.middleware";
import categoryroute from "./routes/categories.routes";
import propertiesRoutes from "./routes/properties.routes";
import schedulesRoutes from "./routes/schedules.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/categories", categoryroute);
app.use("/properties", propertiesRoutes);
app.use("/schedules", schedulesRoutes);

app.use(hadleErrorMiddleware);

export default app;
