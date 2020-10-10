// Super Test setup -- This allows you to send GET/POST/PATCH/DELETE requests
const app = require("../app"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

// This test fails because 1 !== 2
it("Testing to see if Jest works", () => {
  expect(1).toBe(1);
});

it("Async test", async (done) => {
  // Do your async tests here
    const response = await request.get("/testAPI");

    expect(response.status).toBe(200);
    expect(response.text).toBe("The Express API - React connection is working properly");
  done();
});