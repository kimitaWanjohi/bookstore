import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementBy } from '../features/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="w-full px-8 py-4">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => dispatch(increment())}
        >
          Add one
        </button>
        <span className="text-3xl">
          {count}
        </span>
        <button
          type="button"
          onClick={() => dispatch(decrement())}
        >
          Remove one
        </button>
        <button
          type="button"
          onClick={() => dispatch(incrementBy(3))}
        >
          Add Three
        </button>
      </div>
    </div>
  );
}
