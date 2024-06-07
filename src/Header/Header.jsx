import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import styles from './styles.module.css';



const Header = () => {
  // const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionClick = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'option1') {
      window.location.href = '/dogs'; 
    } else if (selectedOption === 'option2') {
      window.location.href = '/cats';
    } else if (selectedOption === 'option3') {
      window.location.href = '/birds'; 
    }
  };
  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu Open:", isMenuOpen); 
  };

  return (
    <header>
      <img src={logo} alt="Logo" />
      <button className="nav-btn" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={isMenuOpen ? "menu open" : "menu"}>
      <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a> 
        <select value={selectedOption} onChange={handleOptionClick}>
        <option value="">Category</option>
        <option value="option1">Dogs</option>
        <option value="option2">Cats</option>
        <option value="option3">Birds</option>
      </select>
        {/* <button className={styles.button} onClick={() => navigate(`/games`)}>Explore Games</button> */}
      </nav>
    </header>
  );
};

export default Header;