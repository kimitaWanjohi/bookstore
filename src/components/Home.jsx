import Books from "./Books";
import Counter from "./counter";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Books />
      <Counter />
    </div>
  );
}
