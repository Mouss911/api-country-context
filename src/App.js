import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Acceuil from "./pages/Acceuil";
import DetailsPays from "./pages/DetailsPays";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/country/:id" element={<DetailsPays />}></Route>
      </Routes>
    </div>
  );
}

export default App;             