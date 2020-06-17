import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleAddButton(event) {
    props.addNote(event, title, content);

    setTitle("");
    setContent("");
  }

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "content":
        setContent(value);
        break;
      default:
    }
  }

  return (
    <div>
      <form onSubmit={handleAddButton}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleInputChange}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleInputChange}
          value={content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
