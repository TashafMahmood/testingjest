import { render, screen } from "@testing-library/react";
import App from "./App";


describe("UI TESTING GROUP", () => {
  test("test case 1", () => {
    render(<App />);
    const checkInputField = screen.getByRole("textbox");
    expect(checkInputField).toBeInTheDocument();
  });

  test("test case 2", () => {
    render(<App />);
    const checkInputPlaceholder = screen.getByPlaceholderText("Enter username");
    expect(checkInputPlaceholder).toBeInTheDocument();
  });
});
