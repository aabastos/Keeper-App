import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import Heading from "./header/Heading";
import Create from "./addNote/CreateArea";
import Footing from "./footer/Footing";
import Note from "./note/Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(event, title, content) {
    const newNote = {
      id: uuid(),
      title: title,
      content: content,
    };

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    event.preventDefault();
  }

  return (
    <div>
      <Heading />
      <Create addNote={addNote} />
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footing />
    </div>
  );
}

export default App;
