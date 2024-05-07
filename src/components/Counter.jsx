import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.Increment());
  };
  const IncrementBy5 = () => {
    dispatch(counterActions.IncrementBy5(4));
  };
  const decrementHandler = () => {
    dispatch(counterActions.Decrement());
  };
  const toggleCounter = () => {
    dispatch(counterActions.ToggleCounter());
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col  items-center w-[500px] py-8 rounded-md bg-white">
        <h1 className="text-2xl">Counter</h1>
        {showCounter && (
          <div>
            <h1 className="text-center text-2xl py-4">{counter} </h1>
          </div>
        )}
        <div>
          <button
            onClick={incrementHandler}
            className="px-8 py-2 my-2 mx-2 bg-black text-white rounded-sm">
            increment
          </button>
          <button
            onClick={IncrementBy5}
            className="px-8 py-2 my-2 mx-2 bg-black text-white rounded-sm">
            incrementby5
          </button>
          <button
            onClick={decrementHandler}
            className="px-8 py-2 bg-black text-white rounded-sm">
            decrement
          </button>
        </div>
        <button
          className="px-8 py-2 bg-black text-white rounded-sm"
          onClick={toggleCounter}>
          Toggle Counter
        </button>
      </div>
    </div>
  );
};
export default Counter;
