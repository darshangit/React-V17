import { Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("orange");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
