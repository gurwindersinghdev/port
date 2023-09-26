"use client";

import Projects from "./components/Projects";
import Social from "./components/Social";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      {" "}
      <Projects />
      <Social />
      <Footer />
    </main>
  );
}
