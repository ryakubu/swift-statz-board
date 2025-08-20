import { capitalize } from "@/utils/string";

describe("capitalize utility", () => {
  it("should capitalize the first letter of a word", () => {
    expect(capitalize("rinret")).toBe("Rinret");
  });

  it("should return an empty string if input is empty", () => {
    expect(capitalize("")).toBe("");
  });

  it("should not change already capitalized words", () => {
    expect(capitalize("Rinret")).toBe("Rinret");
  });
});
