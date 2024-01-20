import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Directory from "./pages/Directory";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddContact from "./pages/AddContact";
import ContactDetails from "./pages/ContactDetails";
import { AppContextProvider } from "./AppContext";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/contact-details/:id" element={<ContactDetails />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
