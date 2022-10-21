import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


export default function NavBar() {
  return (
    <>
			<nav className="navbar">
				<div className="navbar-container">
						<Link to="/" className="Home">Home</Link>
						<Link to="/how-to-use" className="HowToUse">How to use ?</Link>
						<Link to="/siege-datas" className="SiegeDatas">Siege Datas</Link>
				</div>
			</nav>
    </>
  )
}
