import { Link } from "react-router-dom";
import "./footer.scss";
import { GiBookAura } from "react-icons/gi";
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg__accent text__color">
      <div className="top">
        <div className="box1">
          <div className="logo text__primary">
            <GiBookAura className="icon" />
            <h4>Library of Legends</h4>
          </div>
          <p style={{ marginTop: "8px", lineHeight: "1.5rem" }}>
            🚀 Gateway to Knowledge & Discovery 📚 A welcoming space where
            curiosity thrives, ideas grow, and lifelong learning begins! 🌍✨
          </p>
        </div>
        <div className="box2">
          <h4>USEFULL LINKS</h4>
          <Link to="/" className="text__color">
            Home
          </Link>
          <Link to="/about-us" className="text__color">
            About Us
          </Link>
          <Link to="/contact-us" className="text__color">
            Contact Us
          </Link>
          <Link to="/login" className="text__color">
            Login
          </Link>
        </div>

        <div className="box3">
          <h4>OTHER USEFULL LINKS</h4>
          <Link to="http://localhost:5173/books" className="text__color">
            Books
          </Link>
          <Link to="http://localhost:5173/ebooks" className="text__color">
            EBooks
          </Link>
        </div>

        <div className="box4">
          <h4>CONTACT US</h4>
          <div className="item">
          </div>
          <div className="item">
            <AiOutlineMail className="icon" />
            <span>abc@gmail.com</span>
          </div>
          <div className="item">
            <AiOutlinePhone className="icon" />
            <span>123456789</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span>
          &copy;2025 Copyright : Library of Legends Management System
        </span>
      </div>
    </footer>
  );
};

export default Footer;
