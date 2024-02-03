import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page Test Cases", () => {
  it("Should load Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  }); // it is alisa of test

  it("Should load button on Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load Submit button on Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input boxex on Contact component", () => {
    render(<Contact />);

    const inputElement = screen.getAllByRole("textbox");

    expect(inputElement.length).toBe(2);
    expect(inputElement[0]).toBeInTheDocument();
  });

  test("Should load input box with placeholder", () => {
    render(<Contact />);

    const inputElement = screen.getByPlaceholderText("name");

    expect(inputElement).toBeInTheDocument();
  });
});
