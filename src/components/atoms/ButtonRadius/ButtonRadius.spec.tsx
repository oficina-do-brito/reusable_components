import React from "react";
import { render, screen } from "@testing-library/react";
import { ButtonRadius } from "./index";
import userEvent from "@testing-library/user-event";

describe("Test componente < ButtonRadius/>", () => {
    beforeEach(() => {
        var textBT = "submit";
    });
    test("button is rendering in screen, and the text passed to it is rendered", () => {
        expect.assertions(2);
        render(<ButtonRadius />);
        const buttonElement = screen.getByText(/${textBT}/i);

        expect(buttonElement).toBeInTheDocument();
    });
    test("button fires when clicked", () => {
        render(<ButtonRadius />);
        const buttonElement = screen.getByText(/${textBT}/i);
        const buttonclick = userEvent.click(buttonElement);

        expect(buttonclick).toBeCalled();
    });
    test("the button has the styles", () => {
        render(<ButtonRadius />);
        const buttonElement = screen.getByText(/${textBT}/i);
        expect(buttonElement).toHaveAttribute("class", "button-radius");
    });
});
