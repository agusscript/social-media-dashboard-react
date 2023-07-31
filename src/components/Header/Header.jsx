import "./Header.scss";

function Header({ theme, setTheme }) {
  return (
    <header>
      <div>
        <h1 className={`header-title ${theme ? "white" : ""}`}>Social Media Dashboard</h1>
        <p className={`header-subtitle ${theme ? "desatured-blue" : ""}`}>
          Total followers: 23,004
        </p>
      </div>
      <div className="toggle-btn-container">
        <p className="toggle-text">Dark Mode</p>
        <button
          className={`toggle-button ${theme ? "toggle-active" : ""}`}
          aria-label="active dark theme"
          onClick={setTheme}
        >
          <div className={`inner-toggle-button ${theme ? "inner-active" : ""}`}></div>
        </button>
      </div>
    </header>
  );
}

export default Header;
