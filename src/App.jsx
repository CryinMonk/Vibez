import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/layouts/NavBar"
import Footer from "./components/layouts/Footer"
import HomePage from "./components/pages/HomePage"
import AboutPage from "./components/pages/AboutPage"
import ContactPage from "./components/pages/ContactPage"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
