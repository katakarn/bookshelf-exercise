"use client";
import { useState } from "react";

const AddBookForm = ({addBook}) => {
  const [title, setTitle] = useState("Domain Driven Design");

  const onClick = (e) => {
    e.preventDefault();
    addBook(title);
    console.log("title", title);
  };
  return (
    <div>
      <h1>ADD TO COLLECTION</h1>
      <form>
        <div>
          <label>Title </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <button type="submit" onClick={onClick}>Add</button>
          <br />
          {title}
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
