import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Trending from './pages/Trending.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/trending" element={<Trending />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}

export default App