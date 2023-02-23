const request = require("supertest");
var app = require("../app");

// API tests
describe("POST /test ", function () {
  it("Hit /test with valid JSON Data", function (done) {
    // Use supertest to run assertions for our API
    request(app).post("/test").send({ title: "API testing" }).expect(200, done);
  });
  it("Hit /test with invalid JSON Data", function (done) {
    // Use supertest to run assertions for our API
    request(app).post("/test").send("Invalid Request").expect(400, done);
  });
});
