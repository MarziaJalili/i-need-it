import Header from "./components/header/Header";
import Hero from "./components/Hero";
import Features from "./components/features/Features";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";

import { useState } from "react";
const App = () => {
  const [darkMood, setDarkMood] = useState(false);

  return (
    <main className="font-be-vietnam-pro">
      <Header darkMood={darkMood} setDarkMood={setDarkMood} />
      <Hero />
      <Features />
      <Testimonials />
      <Cta />
    </main>
  );
};

export default App;
