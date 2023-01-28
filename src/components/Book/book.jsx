const Book = ({ data }) => (
  <div className="book">
    <div className="book-thumbnail">
      <img src={data.src} alt={data.alt} />
    </div>
    <p className="text-title">{data.name}</p>
    {data.finished ?? <span className="readingStatus">Finish</span>}
  </div>
);

export default Book;
