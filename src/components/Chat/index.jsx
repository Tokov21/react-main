import React, { useReducer } from "react";

import ChatForm from "./ChatForm";
import ChatScreen from "./ChatScreen";

import { reducer } from "./reducer";

export default function Chat() {
  const [chatMessages, dispatch] = useReducer(reducer, []);

  const onSubmit = (values, formikBag) => {
    dispatch(values.messages);

    formikBag.resetForm();
  };

  return (
    <>
      <ChatScreen chatMessages={chatMessages} />
      <ChatForm onSubmit={onSubmit} />
    </>
  );
}
