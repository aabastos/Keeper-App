import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import Heading from "./header/Heading";
import Create from "./addNote/CreateArea";
import Footing from "./footer/Footing";
import Note from "./note/Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote() {
    const newNote = {
      id: new uuid(),
    };

    console.log(newNote);
    setNotes((prevNotes) => {
      return [...prevNotes];
    });
  }

  return (
    <div>
      <Heading />
      <Create />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footing />
    </div>
  );
}

export default App;
