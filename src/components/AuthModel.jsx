import { useState } from 'react'
import './Header.css'  // Reusing the same CSS file

const AuthModal = ({ onClose, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const userData = {
      name: isLogin ? 'User' : formData.get('name'),
      email: formData.get('email')
    }
    onAuthSuccess(userData)
  }

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="auth-close-btn" onClick={onClose}>×</button>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="auth-form-group">
              <label>Name</label>
              <input type="text" name="name" required />
            </div>
          )}
          <div className="auth-form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="auth-form-group">
            <label>Password</label>
            <input type="password" name="password" required minLength="6" />
          </div>
          <button type="submit" className="auth-submit-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="auth-toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            className="auth-toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default AuthModal