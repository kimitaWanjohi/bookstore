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
    <form onSubmit={handleAddbook} className="flex flex-col md:flex-row items-center gap-2 justify-between px-2 py-4 shadow-md">
      <div className="flex flex-col md:flex-row gap-2">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Book Title"
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Book Author"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-400 py-1 px-2 text-white rounded-lg shadow-sm"
      >
        Add Book
      </button>
    </form>
  );
}
