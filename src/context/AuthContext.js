import { createContext, useReducer } from "react";

const AuthContext = createContext({
  user: null,
  authenticated: false,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  function login(userData) {
    localStorage.setItem("token", userData.data.loginUser.token);
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  }

  function logout() {s
    localStorage.removeItem("token");
    dispatch({
      type: "LOGOUT",
    });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
