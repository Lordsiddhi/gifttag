/* eslint-disable react/no-unescaped-entities */
import { Button } from "@material-tailwind/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import myContext from "../../context/myContext";
import { auth, fireDB } from "../../firebase/FirebaseConfig";

const Login = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // User Signup State
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function capitalizeFirstLetter(str) {
    return str.replace(/(^|\/|\s|-)\S/g, function (letter) {
      return letter.toUpperCase();
    });
  }

  function removePrefixAndCapitalize(inputString, prefix) {
    const stringWithoutPrefix = inputString.replace(prefix, "");
    return capitalizeFirstLetter(stringWithoutPrefix);
  }

  /**========================================================================
   *                          User Login Function
   *========================================================================**/

  const userLoginFunction = async () => {
    // validation

    try {
      if (userLogin.email === "" || userLogin.password === "") {
        toast.error("All Fields are required");
        setLoading(false);
      } else {
        setLoading(true);
        const users = await signInWithEmailAndPassword(
          auth,
          userLogin.email,
          userLogin.password
        );
        // console.log(users.user)

        try {
          const q = query(
            collection(fireDB, "user"),
            where("uid", "==", users?.user?.uid)
          );
          const data = onSnapshot(q, (QuerySnapshot) => {
            let user;
            QuerySnapshot.forEach((doc) => (user = doc.data()));
            localStorage.setItem("users", JSON.stringify(user));
            setUserLogin({
              email: "",
              password: "",
            });
            toast.success("Login Successful");
            setLoading(false);
            if (user.role === "user") {
              navigate("/user-dashboard");
            } else {
              navigate("/admin-dashboard");
            }
          });
          return () => data;
        } catch (error) {
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      toast.error(removePrefixAndCapitalize(error.code, "auth/"));
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <span className="mb-8 flex flex-row items-center justify-center text-primary gap-x-2 font-bold text-3xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8"
        >
          <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
        </svg>
        Gift Tag
      </span>
      {loading && <Loader />}
      {/* Login Form  */}
      <div className="login_Form  px-8 py-6 border  rounded-xl shadow-md">
        {/* Top Heading  */}
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold ">Login</h2>
        </div>

        {/* Input One  */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={userLogin.email}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                email: e.target.value,
              });
            }}
            className=" border  px-2 py-2 w-96 rounded-md outline-none "
          />
        </div>

        {/* Input Two  */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            value={userLogin.password}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                password: e.target.value,
              });
            }}
            className=" border  px-2 py-2 w-96 rounded-md outline-none "
          />
        </div>

        {/* Signup Button  */}
        <div className="mb-5">
          <Button
            size="lg"
            type="button"
            onClick={userLoginFunction}
            className="0  w-full text-white text-center py-2 font-bold rounded-md bg-primary"
          >
            Login
          </Button>
        </div>

        <div>
          <h2 className="text-black">
            Don't Have an account?{" "}
            <Link className="text-primary underline font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
