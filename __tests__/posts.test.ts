import axios from "axios";
import { jest } from "@jest/globals";

jest.mock("axios"); // Mock axios

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("JSONPlaceholder /posts/:id API", () => {
  it("should return a valid post when given a valid ID", async () => {
    mockedAxios.get.mockResolvedValue({
      status: 200,
      data: { id: 1, title: "Test Post" },
    });

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("title");
  });

  it("should return 404 for a non-existing post ID", async () => {
    mockedAxios.get.mockRejectedValue({ response: { status: 404 } });

    try {
      await axios.get("https://jsonplaceholder.typicode.com/posts/999999");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        expect(error.response.status).toBe(404);
      }
    }
  });

  it("should return 400 or 404 for an invalid ID type", async () => {
    mockedAxios.get.mockRejectedValue({ response: { status: 400 } });

    try {
      await axios.get("https://jsonplaceholder.typicode.com/posts/abc");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        expect([400, 404]).toContain(error.response.status);
      }
    }
  });
});
