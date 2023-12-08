import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import Header from "../components/Header";
import user from "@testing-library/user-event";

describe("Header.tsx", () => {
  test("Logo should be rendered", () => {
    render(<Header />);

    const logo = screen.getByRole("link", { name: /Kanban Board/i });

    expect(logo).toBeInTheDocument();
  });

  test("New Task dialog window should be opened on 'Add Task' button click", async () => {
    user.setup();

    render(<Header />);

    const addTaskButton = screen.getByRole("button", { name: /Add Task/i });

    await user.click(addTaskButton);

    const dialogWindowHeading = screen.getByTestId("dialog");

    expect(dialogWindowHeading).toBeInTheDocument();
  });
});
