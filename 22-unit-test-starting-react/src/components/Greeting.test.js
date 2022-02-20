import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Greeting } from "./Greeting";

describe("Greeting Component", () => {
  test("Render Hello world as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Asserts
    const helloWorldElement = screen.getByText(/Hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Render It's good to see you! as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Asserts
    const testElement = screen.getByText(/It's good to see you!/i);
    expect(testElement).toBeInTheDocument();
  });

  test("Render Changed! as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Asserts
    const testElement = screen.getByText(/Changed!/i);
    expect(testElement).toBeInTheDocument();
  });

  test("Render good to see you as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Asserts
    const testElement = screen.queryByText(/It's good to see you!/i);
    expect(testElement).toBeNull();
  });
});
