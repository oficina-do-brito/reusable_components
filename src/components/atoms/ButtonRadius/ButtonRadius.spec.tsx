import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ButtonRadius } from ".";

describe("Test componente < ButtonRadius/>", () => {
    var textBT = "submit";

    test("button is rendering in screen, and the text passed to it is rendered", () => {
        expect.assertions(1);
        render(<ButtonRadius text={textBT} />);
        const buttonElement = screen.getByText(/[${textBT}]/i);

        expect(buttonElement).toBeInTheDocument();
    });

    test("button fires when clicked", () => {
        render(<ButtonRadius text={textBT} />);
        const buttonElement = screen.getByRole("button", {
            name: /[${textBT}]/i,
        });
        const click = userEvent.click(buttonElement);

        expect(click).toBeCalled();
    });

    test("the button has the styles", () => {
        render(<ButtonRadius text={textBT} />);
        const buttonElement = screen.getByText(/[${textBT}]/i);
        expect(buttonElement).toHaveAttribute("class", "button-radius");
    });
});
