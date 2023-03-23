import { render, screen } from "@testing-library/react";
import { Forms } from ".";

describe("Test componente < Forms/>", () => {
  test("renders learn react link", () => {
    render(<Forms />);
    const linkElement = screen.getByRole("heading", { name: /Formulario/i });
    expect(linkElement).toBeInTheDocument();
  });
});
