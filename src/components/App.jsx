import React from "react";
import Heading from "./header/Heading";
import Footing from "./footer/Footing";
import Note from "./note/Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Heading />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footing />
    </div>
  );
}

export default App;
