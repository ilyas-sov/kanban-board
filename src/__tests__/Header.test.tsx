import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import Header from "../components/Header";
import user from "@testing-library/user-event";
import { tasksStore } from "../store/tasksStore";

describe("Header.tsx", () => {
  test("Logo should be rendered", () => {
    render(<Header />);

    const logo = screen.getByRole("link", { name: /Kanban Board/i });

    expect(logo).toBeInTheDocument();
  });

  test("New Task dialog window should be opened on 'Add Task' button click and closed on 'Cancel' button click", async () => {
    const dialogContainer = document.createElement("div");
    dialogContainer.id = "dialog";
    document.body.appendChild(dialogContainer);

    user.setup();

    render(<Header />);

    const addTaskButton = screen.getByRole("button", { name: /Add Task/i });

    await user.click(addTaskButton);
    const dialogWindowHeading = screen.getByTestId("dialog");
    expect(dialogWindowHeading).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: /Cancel/i });
    await user.click(cancelButton);
    expect(dialogWindowHeading).not.toBeInTheDocument();
  });

  test("New Task dialog window should be opened on 'Add Column' button click and closed on 'Cancel' button click", async () => {
    const dialogContainer = document.createElement("div");
    dialogContainer.id = "dialog";
    document.body.appendChild(dialogContainer);

    user.setup();

    render(<Header />);

    const addTaskButton = screen.getByRole("button", { name: /Add Column/i });

    await user.click(addTaskButton);
    const dialogWindowHeading = screen.getByTestId("dialog");
    expect(dialogWindowHeading).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: /Cancel/i });
    await user.click(cancelButton);
    expect(dialogWindowHeading).not.toBeInTheDocument();
  });

  test("Alert window should be shown if navigate with unsaved changes", async () => {
    const store = tasksStore;
    store.taskWasChanged = true;
    user.setup();

    const alertSpy = jest.spyOn(window, "alert");

    render(<Header />);

    const logo = screen.getByRole("link", { name: /Kanban Board/i });

    await user.click(logo);

    expect(alertSpy).toBeCalledWith(
      "Please save the changes or cancel them before leaving the page."
    );

    alertSpy.mockRestore();
  });
});
