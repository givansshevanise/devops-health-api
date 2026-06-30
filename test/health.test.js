const request = require("supertest");
const app = require("../src/index");

describe("Health Check API", () => {
  test("GET /health should return service health status", async () => {
    const response = await request(app).get("/health");
    
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.service).toBe("devops-health-api");
    expect(response.body.timestamp).toBeDefined();
  });
});
