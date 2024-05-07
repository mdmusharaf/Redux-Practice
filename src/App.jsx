import "./index.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import MyProfile from "./components/MyProfile";
function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <div className=" bg-slate-800 ">
        <Header />
        <LoginForm />
        {auth && <MyProfile />}

        <Counter />
      </div>
    </>
  );
}

export default App;
