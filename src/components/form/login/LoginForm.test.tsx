import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import mockRouter from 'next-router-mock';
import { MockedProvider } from "@apollo/client/testing";
import { act } from "react-dom/test-utils";
import LoginForm from "./LoginForm";
import userLoginMutation from "../../../graphql/operations/user";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
}));

const mockLogin = jest.fn();

describe("LoginForm component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    act(() => {
      render(
        <MockedProvider>
          <LoginForm />
        </MockedProvider>
      );
    })
  });

  test("renders login form", () => {
    expect(screen.getByTestId("loginForm")).toBeTruthy();
    expect(screen.getByTestId("emailInput")).toBeTruthy();
    expect(screen.getByTestId("passwordInput")).toBeTruthy();
    expect(screen.getByTestId("loginBtn")).toBeTruthy();
    expect(screen.getByTestId("registerBtn")).toBeTruthy();
  });

  test('mocks the useRouter hook', () => {
    act(() => {
      mockRouter.push("");
    });
  });

  test("should not login if inputs empty", async () => {
    const loginButton = screen.getByTestId("loginBtn");
    fireEvent.submit(loginButton);
    expect(mockLogin).not.toBeCalled();
  });

  test("should allow fill inputs", async () => {
    const email = screen.getByTestId("emailInput");
    const password = screen.getByTestId("passwordInput");
    fireEvent.change(email, { target: { value: "email@test.com" } });
    fireEvent.change(password, { target: { value: "test1" } });
    await waitFor(() => {
      expect(email).toHaveDisplayValue("email@test.com");
      expect(password).toHaveDisplayValue("test1");
    }); 
  });     

  test("submits login form properly", async () => {
    const emailInput = screen.getByTestId("emailInput");
    const passwordInput = screen.getByTestId("passwordInput");
    const loginButton = screen.getByTestId("loginBtn");
    fireEvent.change(emailInput, { target: { value: "email@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "test1" } });
    fireEvent.submit(loginButton);
    await waitFor(() => {
      expect(mockRouter.push("/profile"));
    })
  });
});