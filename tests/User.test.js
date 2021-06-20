import { render, screen } from "../test-utils";
import User from "../pages/users/[id]";
import { fireEvent, waitFor } from "@testing-library/dom";
import * as nextRouter from "next/router";
import * as redux from "react-redux";
describe("User Page", () => {
  const data = {
    users: {
      user: [
        {
          email: "Sincere@april.biz",
          id: 1,
          name: "Leanne Graham",
          phone: "1-770-736-8031 x56442",
          username: "Bret",
          website: "hildegard.org",
        },
      ],
    },
  };
  jest
    .spyOn(redux, "useSelector")
    .mockImplementation((callback) => callback(data));
  jest.spyOn(nextRouter, "useRouter").mockImplementation(() => ({
    query: { id: 1 },
  }));
  it("chech activation button", async () => {
    render(<User />);
    const switchComponent = screen.getByRole("checkbox");
    expect(switchComponent).toBeChecked(); //at first //default
    expect(screen.getByText(/active/i)).toBeInTheDocument(); //at first //default

    fireEvent.click(switchComponent); //afetr click
    await waitFor(() => {
      expect(switchComponent).not.toBeChecked();
      expect(screen.getByText(/inactive/i)).toBeInTheDocument();
    });
  });
});
