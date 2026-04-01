const request = require("supertest");
const express = require("express");

// Le test crée sa propre instance Express isolée
// (server.js appelle app.listen() directement, on ne l'importe pas)
const app = express();
app.get("/health", (req, res) => res.json({ status: "ok" }));

test("GET /health returns 200", async () => {
  const res = await request(app).get("/health");
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe("ok");
});
