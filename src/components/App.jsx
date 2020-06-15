import React from "react";
import Heading from "./header/Heading";
import Footing from "./footer/Footing";
import Note from "./note/Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Heading />
      <Note title="Note title" content="Note content" />
      <Footing />
    </div>
  );
}

export default App;
