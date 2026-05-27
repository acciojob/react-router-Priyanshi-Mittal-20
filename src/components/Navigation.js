import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navigation
