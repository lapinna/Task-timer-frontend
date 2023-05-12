import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import mockRouter from 'next-router-mock';
import { MockedProvider } from "@apollo/client/testing";
import LoginForm from "./LoginForm";
import { act } from "react-dom/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
}));

const setup = () => {
  const wrapper = render(
    <MockedProvider>
      <LoginForm />
    </MockedProvider>
  );
  return wrapper;
};

describe("LoginForm component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders login form", () => {
    setup();
    expect(screen.getByTestId("loginForm")).toBeTruthy();
    expect(screen.getByTestId("emailInput")).toBeTruthy();
    expect(screen.getByTestId("passwordInput")).toBeTruthy();
    expect(screen.getByTestId("loginBtn")).toBeTruthy();
    expect(screen.getByTestId("registerBtn")).toBeTruthy();
  });

  test('mocks the useRouter hook', () => {
    setup();
    act(() => {
      mockRouter.push("");
    });
  });

  test("submits login form properly", async () => {
    const mockLogin = jest.fn();
    setup();
    const emailInput = await screen.findByTestId("emailInput");
    const passwordInput = screen.getByTestId("passwordInput");
    const loginButton = await screen.findByTestId("loginBtn");
    fireEvent.change(emailInput, { target: { values: "test@gmail.com" } });
    fireEvent.change(passwordInput, { target: { values: "1234567" } });
    fireEvent.click(loginButton);
    mockLogin(emailInput, passwordInput);
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({
        variables: {
          email: "test@gmail.com",
          password: "1234567",
        },
      });
    })
  });
});