import "./App.css";
import Navbar from "./components/ui/navbar/Navbar";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <>
      <ReactLenis root />
      <Navbar />
    </>
  );
}

export default App;
