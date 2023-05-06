export default function AddBook() {
  return (
    <div className="flex items-center justify-between px-2 py-4 shadow-md">
      <input
        className="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        placeholder="Book Title"
      />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-400 py-1 px-2 text-white rounded-lg shadow-sm"
      >
        Add Book
      </button>
    </div>
  );
}
