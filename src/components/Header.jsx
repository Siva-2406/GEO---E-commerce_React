import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'  // Changed to regular CSS import
import AuthModal from './AuthModel'

const Header = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleAuthSuccess = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    setShowAuthModal(false)
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <header className="header">
      <div className="header-left">GEO</div>
      
      <nav className="header-nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/trending" 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Trending
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
        <NavLink 
          to="/cart" 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Cart
        </NavLink>
      </nav>
      
      <div className="header-right">
        {user ? (
          <button className="user-btn" onClick={handleLogout}>
            <span className="user-icon">👤</span>
            <span>{user.name}</span>
          </button>
        ) : (
          <button 
            className="auth-btn"
            onClick={() => setShowAuthModal(true)}
          >
            Sign In
          </button>
        )}
      </div>

      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
    </header>
  )
}

export default Header