import { useSelector } from "react-redux";
import Book from "./Book";
import AddBook from "./AddBook";

export default function Books() {
  const books = useSelector((state) => state.books.books);
  return (
    <div className="flex w-full flex-col mt-4">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </div>
  );
}
