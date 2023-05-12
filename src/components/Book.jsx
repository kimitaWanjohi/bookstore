import { useDispatch } from "react-redux";
import { delBook } from "../redux/books/booksSlice";

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-2 py-4 shadow-md">
      <div className="flex items-start justify-start flex-col">
        <span className="text-sm text-gray-500">
          {book.category}
        </span>
        <h2 className="text-2xl font-semibold">
          {book.title}
        </h2>
        <span className="text-sm italic text-blue-500">
          {book.author}
        </span>
      </div>
      <button
        type="button"
        onClick={() => dispatch(delBook(book.id))}
        className="bg-blue-500 hover:bg-blue-400 py-1 px-2 text-white rounded-lg shadow-sm"
      >
        Delete Book
      </button>
    </div>
  );
}
