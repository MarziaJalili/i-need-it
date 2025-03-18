import Header from "./components/header/Header";
import Hero from "./components/Hero";
import Features from "./components/features/Features";

import { useState } from "react";
const App = () => {
  const [darkMood, setDarkMood] = useState(false);

  return (
    <main className="font-be-vietnam-pro">
      <Header darkMood={darkMood} setDarkMood={setDarkMood} />
      <Hero />
      <Features />
    </main>
  );
};

export default App;
