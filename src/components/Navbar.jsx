import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-100 shadow-lg  p-4 justify-between w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-blue-500 text-3xl text-bold">Book</h1>
        <div className="flex gap-8">
          <button
            className="hover:scale-105  bg-gray-200 rounded-md hover:bg-white text-blue-500 px-2 py-1"
            type="button"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="hover:scale-105  bg-gray-200 rounded-md hover:bg-white text-blue-500 px-2 py-1"
            type="button"
            onClick={() => navigate("/categories")}
          >
            Categories
          </button>
        </div>
      </div>
    </nav>
  );
}
