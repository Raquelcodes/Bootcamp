import React from "react";
import Header from "../Header";

const App = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default App;
