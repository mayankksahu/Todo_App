import React from 'react'

const Footer = () => {

  const footerStyle = {
    backgroundColor: "#1f1f1f",
    color: "#ffffff",
    textAlign: "center",
    padding: "20px 10px",
    position: "relative",
    bottom: "0",
    width: "100%",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    letterSpacing: "0.5px",
    borderTop: "2px solid #4caf50",
    boxShadow: "0px -2px 10px rgba(0,0,0,0.3)"
  }

  return (
    <footer style={footerStyle}>
      <p>
        &copy; {new Date().getFullYear()} <span style={{ color: "#4caf50", fontWeight: "bold" }}>TodoList.com Made by Mayank Kumar Sahu</span> | All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
