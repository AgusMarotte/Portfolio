import { useState } from "react";
import "./App.css";
import Navbar from "./components/ui/navbar/Navbar";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReactLenis root />
      <Navbar />
    </>
  );
}

export default App;
