import { render, screen } from "@testing-library/react";
import Layout from "../layouts/Layout";

describe("Layout", () => {
  it("Successfully Renders",()=>{
    render(<Layout />)
  })
  it("Renders Home Link", () => {
    render(<Layout />);
    expect(
      screen.getByRole("link", { name: "Home" })
    ).toBeInTheDocument();
  });

  it("Renders Adventures Link", () => {
    render(<Layout />);
    expect(
      screen.getByRole("link", { name: "Adventures" })
    ).toBeInTheDocument();
  });

});