import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("Render posts if request succeeds", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "The first title" }],
    });
    render(<Async />);

    // Act

    // Asserts
    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).not.toHaveLength(0);
  });
});
