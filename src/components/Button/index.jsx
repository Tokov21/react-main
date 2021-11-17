import React from "react";

export default function Button({ text, ...props }) {
  return <button {...props}>{text}</button>;
}
