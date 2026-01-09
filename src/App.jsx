import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AdminPanel from './pages/AdminPanel';
import ContactUs from './pages/ContactUs';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Internships from './pages/Internships';
import Login from './pages/Login';
import OurVision from './pages/OurVision';
import Projects from './pages/Projects';
import Signup from './pages/Signup';
import Careers from './pages/Careers';
import Clients from './pages/Clients';
import { serviceRoutes } from './routes/serviceRoutes';
function App() {
  return (
    <Router>
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/vision" element={<OurVision />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/clients" element={<Clients />} />

        {/* Protected Routes */}
        <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

        {/* Service Routes */}
        {serviceRoutes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}

        {/* Fallback 404 */}
        <Route path="*" element={<h1 style={{ textAlign: "center", marginTop: "50px" }}>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
