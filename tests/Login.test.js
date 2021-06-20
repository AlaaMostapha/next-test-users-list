import { render, screen, fireEvent, waitFor } from "../test-utils";
import Login from "../pages/Auth/Login";

describe("Login Form", () => {
  it("check valid email", async () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "alaam@gmail.com" },
    });
    fireEvent.click(screen.getByRole("button"));
    const emailField = await waitFor(() => {
      return screen.getByPlaceholderText("Email");
    });
    expect(emailField).toBeValid();
  });

  it("check valid password", async () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "1234578" },
    });
    fireEvent.click(screen.getByRole("button"));
    const passwordField = await waitFor(() => {
      return screen.getByPlaceholderText("Password");
    });
    expect(passwordField).not.toBeValid();
  });
});