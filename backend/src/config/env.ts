const parsedPort = Number.parseInt(process.env.PORT ?? "3000", 10);

if (Number.isNaN(parsedPort)) {
  throw new Error("PORT must be a valid number");
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: parsedPort,
} as const;
