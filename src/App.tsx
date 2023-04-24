import HomePage from "./components/HomePage";
import Employee from "./components/Employee";
import NewEmployee from "./components/NewEmployee";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Employee />} />
        <Route path="/users/add" element={<NewEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
