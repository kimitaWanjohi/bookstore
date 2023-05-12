import { useDispatch } from "react-redux";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { delBook } from "../redux/books/booksSlice";

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-2 py-4 shadow-md">
      <div className="flex w-1/4 items-start justify-start flex-col">
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
      <div className="h-[60px] w-[60px]">
        <CircularProgressbar value={50} text="50%" />
      </div>
      <div className="flex items-start justify-start flex-col gap-1">
        <h4 className="text-md font-light">Current Chapter</h4>
        <h3 className="text-md">Chapter 18</h3>
        <button
          type="button"
          onClick={() => dispatch(delBook(book.id))}
          className="bg-blue-500 hover:bg-blue-400 py-2 px-4 text-white rounded-sm shadow-sm"
        >
          Delete Book
        </button>
      </div>
    </div>
  );
}
