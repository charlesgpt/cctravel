import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  // Apply dark theme by default
  React.useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <Router>
      <div className="relative min-h-screen font-body text-white overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-luxury-gradient" />

        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-40 right-40 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </div>
      </div>
    </Router>
  )
}

export default App
