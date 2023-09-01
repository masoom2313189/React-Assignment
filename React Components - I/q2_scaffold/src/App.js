import { render } from "@testing-library/react";
import "./styles.css";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";

export default function App() {
  // Code here
  return (
    <div className="app">
      <Hero />
      <Skills />
      <About />
    </div>
  );
}
