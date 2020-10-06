import React, {useState} from "react";
import {t, addLocale} from "ttag";
import logo from "./logo.svg";
import "./App.css";
import en from "./en.po";
import fi from "./fi.po";
import mi from "./mi.po";

const LANGUAGES = {en, fi, mi};
Object.entries(LANGUAGES).map(([name, data]) => addLocale(name, data));

function App() {
  const [lang, localise] = useState("en");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> FIXME {lang} </p>
        <p>{t`Example`}</p>
        <p>
          <span role="img" aria-label="en" onClick={() => localise("en")}>🇬🇧</span>
          <span role="img" aria-label="fi" onClick={() => localise("fi")}>🇫🇮</span>
          <span role="img" aria-label="mi" onClick={() => localise("mi")}>🇳🇿</span>
        </p>
      </header>
    </div>
  );
}

export default App;
