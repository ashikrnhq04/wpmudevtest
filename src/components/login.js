import { useDispatch } from "react-redux";
import { login, logout } from "../features/User";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Ashik", age: 31, email: "ashikrn.hq04@gmail.com" })
          );
        }}>
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}>
        Logout
      </button>
    </div>
  );
};

export default Login;
