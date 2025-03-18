import Header from "./components/header/Header";
import Hero from "./components/Hero";

import { useState } from "react";
const App = () => {
  const [darkMood, setDarkMood] = useState(false);

  return (
    <main className="font-be-vietnam-pro">
      <Header darkMood={darkMood} setDarkMood={setDarkMood} />
      <Hero />
    </main>
  );
};

export default App;
