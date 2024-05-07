import { authActions } from "../store";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div className="flex justify-between items-center p-4 bg-gray-500 text-white">
      <div className="text-lg font-bold">Redux Practice</div>
      <button
        className="text-white hover:text-gray-300"
        onClick={logOutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Header;
