import Left from "./components/Left";
import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="flex">
      <Left />
      <Home />
    </div>
  );
}

export default App;
