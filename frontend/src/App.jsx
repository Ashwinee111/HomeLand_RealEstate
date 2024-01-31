import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import PropertyDetails from "./pages/PropertyDetails"

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/property/:id" element={<PropertyDetails/>} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
