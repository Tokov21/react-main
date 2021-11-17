import React from "react";
import { Link } from "react-router-dom";

import Chat from "../../components/Chat";

export default function ChatPage() {
  return (
    <>
      <div>
        <Link to="/">Main</Link>
      </div>
      <Chat />
    </>
  );
}
