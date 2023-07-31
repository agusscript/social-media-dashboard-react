import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect, useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("very-dark-blue");
    } else {
      document.body.classList.remove("very-dark-blue");
    }
  });

  return (
    <div className="App">
      <Header theme={darkTheme} setTheme={() => setDarkTheme(!darkTheme)} />
      <Main theme={darkTheme} />
      <Footer theme={darkTheme} />
    </div>
  );
}

export default App;
