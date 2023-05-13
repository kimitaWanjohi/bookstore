import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/books/booksSlice";
import Book from "./Book";
import AddBook from "./AddBook";

export default function Books() {
  const dispatch = useDispatch(fetchBooks());
  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="flex w-full gap-2 flex-col mt-4">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </div>
  );
}
