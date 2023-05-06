export default function Book() {
  return (
    <div className="flex items-center justify-between px-2 py-4 shadow-md">
      <h1>Book</h1>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-400 py-1 px-2 text-white rounded-lg shadow-sm"
      >
        Delete Book
      </button>
    </div>
  );
}
