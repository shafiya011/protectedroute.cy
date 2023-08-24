import Footer from "./Components/Footer";
import HomePage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import InsureServices from "./Components/Services";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import ReviewsPage from "./Components/ReviewsPage";
import Entry from "./Components/Entry";
import { AuthProvider } from "./Components/auth";
import RequireAuth from "./Components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Entry />
        <Routes>
          <Route
            path="/landingpage"
            exact
            element={
              <div>
                <Navbar />
                <HomePage /> <InsureServices />
                <Footer />
              </div>
            }
          />
          <Route
            path="/reviews"
            element={
              <RequireAuth>
                <ReviewsPage />
              </RequireAuth>
            }
          />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
