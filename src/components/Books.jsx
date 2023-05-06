import Book from "./Book";
import AddBook from "./AddBook";

export default function Books() {
  return (
    <div className="flex w-full flex-col mt-4">
      {[1, 2, 3, 4, 5].map((book) => (
        <Book key={book} />
      ))}
      <AddBook />
    </div>
  );
}
