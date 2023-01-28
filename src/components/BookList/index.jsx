"use client";
import Book from "../Book/book";
// 💡 book contains title: string, coverImg: string, finished: boolean

const BookList = () => {
  const book1 = {
    src: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    alt: "book cover",
    name: "Clean Code",
    finished: true,
  };

  const book2 = {
    src: "https://m.media-amazon.com/images/I/61aFldsgAmL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    alt: "book cover",
    name: "Finish",
    finished: true,
  };

  return (
    <div className="bookList">
      <Book data={book1} />
      <Book data={book2} />
    </div>
  );
};

export default BookList;
