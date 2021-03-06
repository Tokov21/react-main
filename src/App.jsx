import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import CounterPage from "./pages/CounterPage";
import SliderPage from "./pages/SliderPage";
import SignUpPage from "./pages/SignUpPage";
import ChatPage from "./pages/ChatPage";

import "./App.sass";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/counter" element={<CounterPage />} />
        <Route exact path="/slider" element={<SliderPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
