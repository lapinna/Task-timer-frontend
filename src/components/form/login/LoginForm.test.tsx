import { render, screen } from "@testing-library/react";
import mockRouter from 'next-router-mock';
import LoginForm from "./LoginForm";

jest.mock('next/router', () => require('next-router-mock'));

describe("LoginForm", () => {
  test('mocks the useRouter hook', () => {
    mockRouter.push("/profile");
  });
  test("login button should be in the login form", () => {
    render(<LoginForm/>)
    const loginButton = screen.getByTestId("loginBtn");
    expect(loginButton).toBeInTheDocument();
  });
});