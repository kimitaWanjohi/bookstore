import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";

export default function AddBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const dispatch = useDispatch();

  const handleAddbook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: Math.random(),
      title,
      author,
      category: "sci-fi"
    };
    dispatch(addBook(newBook));
    e.target.reset();
  };

  return (
    <div className="px-2 py-4">
      <h4 className="font-bold text-xl text-gray-400">
        ADD NEW BOOK
      </h4>
      <form onSubmit={handleAddbook} className="flex flex-col md:flex-row mt-2 items-center gap-2 justify-between shadow-sm">
        <div className="w-full flex flex-col md:flex-row gap-2">
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="border w-full md:w-3/4 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Book Title"
          />
          <input
            onChange={(e) => setAuthor(e.target.value)}
            className="border w-full md:w-1/4 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Book Author"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-[10rem] hover:bg-blue-400 py-2 px-4 text-white rounded-sm shadow-sm"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
