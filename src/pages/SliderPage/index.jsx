import React from "react";
import { Link } from "react-router-dom";

import Slider from "../../components/Slider";

export default function SliderPage() {
  return (
    <>
      <div>
        <Link to="/">Main</Link>
      </div>
      <Slider />
    </>
  );
}
