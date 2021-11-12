import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";

export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      name: name,
      value: value,
    });
  };

  return (
    <form action="">
      <input
        type="text"
        name="login"
        value={state.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
    </form>
  );
}
