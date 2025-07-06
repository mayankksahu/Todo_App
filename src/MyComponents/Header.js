import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Header(props) {
    return (
  <div style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)', background: '#f8f9fa' }}>
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 30px', fontFamily: 'Poppins, sans-serif' }}>
      
      {/* Left: Logo */}
      <Link to="/" style={{ textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50' }}>
        {props.title}
      </Link>

      {/* Middle: Navigation Links */}
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: '#34495e', fontWeight: '500' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: 'none', color: '#34495e', fontWeight: '500' }}>About</Link>
        </li>
      </ul>

      {/* Right: Optional Search */}
      {props.searchBar && (
        <form style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: '6px 10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '6px 12px',
              backgroundColor: '#27ae60',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </form>
      )}
    </nav>
  </div>
);

}


Header.defaultProps={
    title: "Your Title Here",
    searchBar: true
}

Header.propTypes={
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}