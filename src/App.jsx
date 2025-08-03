import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import pages
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Services from './pages/Services'
import Stylists from './pages/Stylists'
import Booking from './pages/Booking'
import BookingHistory from './pages/BookingHistory'
import Profile from './pages/Profile'
import CustomerDashboard from './pages/dashboard/CustomerDashboard'
import StylistDashboard from './pages/dashboard/StylistDashboard'
import AdminDashboard from './pages/dashboard/AdminDashboard'

// Import layout components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services" element={<Services />} />
            <Route path="/stylists" element={<Stylists />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking-history" element={<BookingHistory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard/customer" element={<CustomerDashboard />} />
            <Route path="/dashboard/stylist" element={<StylistDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
