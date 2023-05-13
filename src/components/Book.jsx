import { useDispatch } from "react-redux";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { delBook } from "../redux/books/booksSlice";

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-md px-8 py-6 shadow-sm">
      <div className="flex w-1/4 items-start justify-start flex-col">
        <span className="text-sm text-gray-500">
          {book.category}
        </span>
        <h2 className="text-2xl font-semibold mt-2">
          {book.title}
        </h2>
        <span className="text-sm italic text-blue-500">
          {book.author}
        </span>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm text-blue-500 cursor-pointer">Comments</span>
          <span className="text-sm text-blue-500 cursor-pointer">Remove</span>
          <span className="text-sm text-blue-500 cursor-pointer">Edit</span>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <div className="h-[80px] w-[80px]">
          <CircularProgressbar value={50} />
        </div>
        <div className="flex flex-col">
          <span className="text-5xl text-gray-500 font-light">50%</span>
          <span className="text-md text-gray-400">Completed</span>
        </div>

      </div>

      <div className="flex items-start justify-start flex-col gap-1 md:mr-12">
        <h4 className="text-md font-light text-gray-400">Current Chapter</h4>
        <h3 className="text-md">Chapter 18</h3>
        <button
          type="button"
          onClick={() => dispatch(delBook(book.id))}
          className="bg-blue-500 min-w-[9rem] hover:bg-blue-400 py-2 px-4 text-white rounded-sm shadow-sm"
        >
          Delete Book
        </button>
      </div>
    </div>
  );
}
