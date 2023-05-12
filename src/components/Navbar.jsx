import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="shadow-lg  p-4 justify-between w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-baseline">
          <h1 className="text-blue-500 text-3xl text-bold">Book</h1>
          <button
            className="hover:scale-105 rounded-md text-blue-500 px-2"
            type="button"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="hover:scale-105 rounded-md text-blue-500 px-2"
            type="button"
            onClick={() => navigate("/categories")}
          >
            Categories
          </button>
        </div>
        <BsFillPersonFill size={30} className="text-blue-500" />
      </div>
    </nav>
  );
}
