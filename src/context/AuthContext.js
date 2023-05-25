import { createContext, useReducer } from "react";

const AuthContext = createContext();

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

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  function login(userData) {
    if (userData.data.loginUser) {
      localStorage.setItem("token", userData.data.loginUser.token);
      dispatch({
        type: "LOGIN",
        payload: userData.data.loginUser,
      });
    } else {
      localStorage.setItem("token", userData.data.registerUser.token);
      dispatch({
        type: "LOGIN",
        payload: userData.data.registerUser,
      });
    }
  }

  function logout() {
    localStorage.removeItem("token");
    dispatch({
      type: "LOGOUT",
    });
  }

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
