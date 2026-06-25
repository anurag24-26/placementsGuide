import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>
            Placement<span>Vault</span>
          </h3>
          <p>Your one-stop platform for placement preparation.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/resume">Resume</Link>
        </div>

        <div className="footer-links">
          <h4>Subjects</h4>
          <Link to="/os">Operating Systems</Link>
          <Link to="/dbms">DBMS</Link>
          <Link to="/cn">Computer Networks</Link>
          <Link to="/oops">OOPs</Link>
        </div>

        <div className="footer-links">
          <h4>Connect</h4>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PlacementVault. All rights reserved.</p>
      </div>
    </footer>
  );
}