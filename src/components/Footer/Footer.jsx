import "./Footer.scss";

function Footer({ theme }) {
  return (
    <footer>
      <div className={`text-container ${theme ? "white" : ""}`}>
        <span>Coded by </span>
        <a
          href="https://github.com/agusscript"
          className={`footer-link ${theme ? "lime-green" : ""}`}
          target="_blank"
        >
          Agustin Sanchez
        </a>
      </div>
    </footer>
  );
}

export default Footer;
