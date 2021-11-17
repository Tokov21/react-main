export const reducer = (prevMessages, message) => {
  if (typeof message !== "object") {
    return [
      ...prevMessages,
      { message: message, id: prevMessages.length, time: Date.now() },
    ];
  }

  return prevMessages;
};
