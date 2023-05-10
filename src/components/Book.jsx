import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/booksSlice";

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-2 py-4 shadow-md">
      <div className="flex items-start justify-start flex-col">
        <h2 className="text-xl font-semibold">
          {book.title}
        </h2>
        <h4 className="text-md italic text-grey-500">
          {book.author}
        </h4>
      </div>
      <button
        type="button"
        onClick={() => dispatch(removeBook(book.id))}
        className="bg-red-500 hover:bg-red-400 py-1 px-2 text-white rounded-lg shadow-sm"
      >
        Delete Book
      </button>
    </div>
  );
}
