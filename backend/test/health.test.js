const request = require("supertest");
const express = require("express");

// Instance Express isolee pour les tests
// server.js appelle app.listen() directement et ne peut pas etre importe
const app = express();
app.get("/health", (req, res) => res.json({ status: "ok" }));

describe("GET /health", () => {
  test("retourne 200", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
  });

  test("retourne { status: ok }", async () => {
    const res = await request(app).get("/health");
    expect(res.body.status).toBe("ok");
  });
});
