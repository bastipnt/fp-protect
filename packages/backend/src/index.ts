import { cors } from "@elysiajs/cors";
import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";

const isProd = process.env.NODE_ENV === "production";

const sharedRoutes = new Elysia();
let app;

if (isProd) {
  app = new Elysia()
    .use(
      staticPlugin({
        prefix: "",
        assets: "dist",
      })
    )
    .get("/", () => Bun.file("dist/index.html"))
    .use(sharedRoutes)
    .listen(3000);
} else {
  app = new Elysia()
    .use(
      cors({
        origin: "localhost:5173",
        credentials: true,
        methods: ["GET", "POST"],
      })
    )
    .get("/", () => "Hello from Elysia 👋")
    .use(sharedRoutes)
    .listen(3000);
}

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
