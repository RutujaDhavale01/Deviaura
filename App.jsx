import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import './App.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { id: 1, name: 'Artisan Pipe Cleaners', category: 'pipe', price: '₹199', image: '/images/pipe-cleaners.svg', desc: 'Premium twisted fibers' },
    { id: 2, name: 'Soy Candles', category: 'candle', price: '₹599', image: '/images/candles.svg', desc: 'Hand-poured, long-lasting' },
    { id: 3, name: 'Jesmonite Vessels', category: 'jesmonite', price: '₹1,299', image: '/images/jesmonite.svg', desc: 'Sculptural & functional' },
    { id: 4, name: 'Dyed Cleaners Set', category: 'pipe', price: '₹349', image: '/images/pipe-cleaners.svg', desc: 'Vibrant hues, craft-ready' },
    { id: 5, name: 'Scented Blends', category: 'candle', price: '₹799', image: '/images/candles.svg', desc: 'Botanical & earthy notes' },
    { id: 6, name: 'Jesmonite Planters', category: 'jesmonite', price: '₹899', image: '/images/jesmonite.svg', desc: 'Modern geometric forms' },
  ];

  const filtered = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrollPos > 50 ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo">Atelier</div>
          
          <div className="header-right">
            <button 
              className="menu-button" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {['all', 'pipe', 'candle', 'jesmonite'].map(cat => (
            <button 
              key={cat}
              className={`menu-item ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => { setSelectedCategory(cat); setMenuOpen(false); }}
            >
              {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Crafted with intention</h1>
          <p>Discover our curated collection of artisanal pipe cleaners, hand-poured candles, and sculptural Jesmonite pieces.</p>
          <button className="cta-button">Explore Collection</button>
        </div>
      </section>

      {/* Category Filter */}
      <section className="filter-section">
        <div className="filter-buttons">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'pipe', label: 'Pipe Cleaners' },
            { id: 'candle', label: 'Candles' },
            { id: 'jesmonite', label: 'Jesmonite' }
          ].map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="products-grid">
          {filtered.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <button className="cart-button">
                  <ShoppingCart size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>About our craft</h2>
          <p>Each piece is created with meticulous attention to detail. From sustainably sourced materials to eco-conscious production, we believe that luxury and responsibility belong together. Our collections blend functionality with artistry—objects designed to inspire and endure.</p>
          <div className="stats-grid">
            {[
              { label: 'Handcrafted', value: '100%' },
              { label: 'Sustainable', value: 'Yes' },
              { label: 'Bespoke', value: 'Available' }
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-brand">✦ Atelier — Curated Craft Objects ✦</p>
        <div className="footer-links">
          {['Contact', 'Journal', 'Sustainability', 'Returns'].map(link => (
            <a key={link} href="#">{link}</a>
          ))}
        </div>
        <p className="footer-copy">© 2026 Atelier. All rights reserved.</p>
      </footer>
    </div>
  );
}
