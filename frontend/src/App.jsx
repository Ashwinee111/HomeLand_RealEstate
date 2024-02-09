import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Property from "./pages/Property";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div className="h-[100vh]">
      <div className="max-w-[1440px] mx-auto h-[100vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          {/* ===== Privet Route ===== */}
          <Route
            path="/property"
            element={
              <PrivateRoute>
                <Property />
              </PrivateRoute>
            }
          />
          <Route
            path="/property/:id"
            element={
              <PrivateRoute>
                <PropertyDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/myprofile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/settings"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          {/* ======================== */}
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/updatepassword/:id" element={<UpdatePassword />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default App;
