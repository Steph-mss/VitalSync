const request = require("supertest");
const express = require("express");

const app = express();
app.get("/api/activities", (req, res) => res.json([]));

describe("GET /api/activities", () => {
  test("retourne 200", async () => {
    const res = await request(app).get("/api/activities");
    expect(res.statusCode).toBe(200);
  });

  test("retourne un tableau vide", async () => {
    const res = await request(app).get("/api/activities");
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });
});
