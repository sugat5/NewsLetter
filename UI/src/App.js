import Admin from "./components/admin";
import Subscriptionform from "./components/subscription form";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Subscriptionform />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
