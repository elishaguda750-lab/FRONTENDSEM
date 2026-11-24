
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

// Header
function Header() {
  return (
    <header>
      <h1>My Ecommerce Store</h1>
      <p>Welcome to Online Shopping</p>
    </header>
  );
}

// Menu
function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

// Sidebar
function Sidebar() {
  return (
    <aside>
      <h3>Categories</h3>
      <p>Electronics</p>
      <p>Clothing</p>
      <p>Mobiles</p>
      <p>Shoes</p>
    </aside>
  );
}

// Pages
function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function Products() {
  return (
    <div>
      <h2>Our Products</h2>
      <p>Mobile - ₹15000</p>
      <p>Laptop - ₹45000</p>
      <p>Shoes - ₹2000</p>
    </div>
  );
}

function About() {
  return <h2>About Our Store</h2>;
}

function Contact() {
  return <h2>Contact: ecommerce@gmail.com</h2>;
}

// Footer
function Footer() {
  return (
    <footer>
      <p>© 2026 My Ecommerce Store</p>
    </footer>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />

      <div className="layout">
        <Sidebar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
