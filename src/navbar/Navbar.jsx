import React from 'react'
import Toogle from '../toogle/Toogle'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="front">
            <div className="left">
                <div className="name">
                    MyProjects
                </div>
                <Toogle />
            </div>
            <div className="right">
                <div className="list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar