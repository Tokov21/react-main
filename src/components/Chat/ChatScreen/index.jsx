import React from "react";

export default function ChatScreen({ chatMessages }) {
  console.log(chatMessages);
  const arrayJSX = chatMessages.map((msg, i) => (
    <li key={msg.id}>
      {msg.message} {new Date(msg.time).toString()}
    </li>
  ));

  return (
    <article>
      <ul>{arrayJSX}</ul>
    </article>
  );
}
