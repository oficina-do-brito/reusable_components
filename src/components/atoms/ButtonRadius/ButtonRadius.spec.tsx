import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonRadius } from ".";

describe("Test componente < ButtonRadius/>", () => {
  const props = {
    text: "submit",
    modo: "background",
  };

  test("button is rendering in screen, and the text passed to it is rendered", () => {
    expect.assertions(1);
    render(<ButtonRadius {...props} />);
    const buttonElement = screen.getByText(/[${textBT}]/i);

    expect(buttonElement).toBeInTheDocument();
  });

  test("button fires when clicked", () => {
    render(<ButtonRadius {...props} />);
    const button = screen.getByText(/[${textBT}]/i);
    const foiclicado = fireEvent.click(button);
    expect(foiclicado).toBeTruthy();
  });

  test("the button has the styles", () => {
    render(<ButtonRadius {...props} />);
    const buttonElement = screen.getByText(/[${textBT}]/i);
    expect(buttonElement).toHaveStyle({ background: "white" });
  });
});
