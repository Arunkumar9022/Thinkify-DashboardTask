import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreativesDashboard from "./components/CreativeDashboard";

function App() {
  return (
    <>
      <div className="App">
        <h1>My Creatives App</h1>
        <CreativesDashboard />
      </div>
    </>
  );
}

export default App;
