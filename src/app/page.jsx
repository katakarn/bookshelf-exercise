"use client";
import React, { useState } from "react";
import AddBookForm from "@/components/AddBookForm";
import BookList from "@/components/BookList";

const HomePage = () => {
  const books = [{ title: "Clean Code" }];
  const [booksState,setBooksState] = useState(books);
  return (
    <div>
      <AddBookForm addBook={(newtitle)=>{
        setBooksState((prev)=>[...prev, {title:newtitle}])}}/>
      <hr />
      <BookList books={booksState} />
    </div>
  );
};

export default HomePage;
