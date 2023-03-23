import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./index";

describe("Test componente Home", () => {
    test("home is being rendered on the screen", () => {
        render(<Home />);
        const linkElement = screen.getByTestId("home-element");
        expect(linkElement).toBeInTheDocument();
    });
});
