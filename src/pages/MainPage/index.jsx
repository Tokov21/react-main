import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
