import { render, screen } from "@testing-library/react";
import App from "../layouts/Layout";

describe("Layout", () => {
  it("Renders Home Link", () => {
    render(<App mode={false}/>);
    expect(
      screen.getByRole("link", { name: "Home" })
    ).toBeInTheDocument();
  });

  it("Renders Adventures Link", () => {
    render(<App mode={false}/>);
    expect(
      screen.getByRole("link", { name: "Adventures" })
    ).toBeInTheDocument();
  });

});