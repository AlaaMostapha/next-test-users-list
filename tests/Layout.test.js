import { render, screen } from "../test-utils";
import Layout from "../components/Layout";

describe("Layout", () => {
  it("render logo", () => {
    render(<Layout/>);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});