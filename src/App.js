import React, {useState} from "react";
import {t, addLocale, useLocale as use_locale} from "ttag";
import logo from "./logo.svg";
import "./App.css";
import en from "./en.po";
import fi from "./fi.po";
import mi from "./mi.po";

const LANGUAGES = {en, fi, mi};
Object.entries(LANGUAGES).map(([name, data]) => addLocale(name, data));

function App() {
  const [lang, localise] = useState("en");
  const set = (l) => {
    use_locale(l);
    localise(l);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{lang}: {t`Example`}</p>
        <p>
          <span role="img" aria-label="en" onClick={() => set("en")}>🇬🇧</span>
          <span role="img" aria-label="fi" onClick={() => set("fi")}>🇫🇮</span>
          <span role="img" aria-label="mi" onClick={() => set("mi")}>🇳🇿</span>
        </p>
      </header>
    </div>
  );
}

export default App;
