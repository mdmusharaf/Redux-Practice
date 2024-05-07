import { useDispatch } from "react-redux";
import { authActions } from "../store";
const LoginForm = () => {
  const dispatch = useDispatch();
  const loginHandle = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <form onSubmit={loginHandle} className="flex flex-col items-center">
      <input
        type="email"
        placeholder="Email"
        className="border rounded-md p-2 m-2"
      />
      <input
        type="password"
        placeholder="Password"
        className="border rounded-md p-2 m-2"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
