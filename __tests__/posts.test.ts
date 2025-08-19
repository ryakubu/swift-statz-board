import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("JSONPlaceholder /posts/:id API", () => {
  it("should return a valid post when given a valid ID", async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("title");
  });

  it("should return 404 for a non-existing post ID", async () => {
    try {
      await axios.get(`${BASE_URL}/posts/999999`);
    } catch (error: any) {
      expect(error.response.status).toBe(404);
    }
  });

  it("should return 400 or 404 for an invalid ID type", async () => {
    try {
      await axios.get(`${BASE_URL}/posts/abc`);
    } catch (error: any) {
      expect([400, 404]).toContain(error.response.status);
    }
  });
});

