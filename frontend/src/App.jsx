import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Property from "./pages/Property";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-white h-[100%]">
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default App;
