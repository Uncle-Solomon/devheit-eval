import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Directory from "./pages/Directory";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddContact from "./pages/AddContact";
import ContactDetails from "./pages/ContactDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/directory"
            element={<Directory authenticated={true} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/contact-details/:id" element={<ContactDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
