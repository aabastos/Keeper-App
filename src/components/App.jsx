import React from "react";
import Heading from "./header/Heading";
import Footing from "./footer/Footing";
import Note from "./note/Note";

function App() {
  return (
    <div>
      <Heading />
      <Note />
      <Note />
      <Footing />
    </div>
  );
}

export default App;
