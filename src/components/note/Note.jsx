import React from "react";

function Note(props) {
  function handleDeleteButton() {
    props.deleteNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDeleteButton}>DELETE</button>
    </div>
  );
}

export default Note;
