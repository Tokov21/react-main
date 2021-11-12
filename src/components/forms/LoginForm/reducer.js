export const initialState = {
  login: "",
  password: "",
};

export default function reducer(prevState, { name, value }) {
  if (name !== "" && name !== undefined) {
    return { ...prevState, [name]: value };
  }

  return prevState;
}
