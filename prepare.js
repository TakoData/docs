import * as fs from "fs/promises";

const schema = JSON.parse(await fs.readFile("./openapi.json", "utf8"));

// Remove local development server
schema.servers = schema.servers.filter((s) => !s.url.includes("//127.0.0.1"));

// Remove authorization from /auth-token
delete schema.paths["/auth-token"].post.security;
delete schema.paths["/auth-token/"].post.security;

// Remove cookie auth
delete schema.components.securitySchemes.cookieAuth;

await fs.writeFile(
  "./api-reference/openapi.json",
  JSON.stringify(schema, null)
);
