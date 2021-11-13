import React from "react";
import { Link } from "react-router-dom";

import Counter from "../../components/Counter";

export default function CounterPage() {
  return (
    <>
      <div>
        <Link to="/">Main</Link>
      </div>
      <Counter step={1} />
    </>
  );
}
