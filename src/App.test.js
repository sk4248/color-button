import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has corect initial color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue"
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton.textContent).toBe("Change to MediumVioletRed");
});

test("initil conditions", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue"
  });

  expect(colorButton).toBeEnabled();
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("disable button on checked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel case letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MetaRed")).toBe("Meta Red");
  });

  test("works for two inner capitol letters", () => {
    expect(replaceCamelWithSpaces("MetaRedBlue")).toBe("Meta Red Blue");
  });
});
