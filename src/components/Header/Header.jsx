import "./Header.scss";
import ToggleButton from "../ToggleButton/ToggleButton";

function Header() {
  return (
    <header>
      <div>
        <h1 className="header-title">Social Media Dashboard</h1>
        <p className="header-subtitle">Total followers: 23,004</p>
      </div>
      <div className="toggle-btn-container">
        <p className="toggle-text">Dark Mode</p>
        <ToggleButton />
      </div>
    </header>
  );
}

export default Header;
