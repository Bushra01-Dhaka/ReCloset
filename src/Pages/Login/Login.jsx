import { FaGoogle } from "react-icons/fa";
import registerImg from ".././../assets/log1.png";
import usePrimaryBtn from "../../Hooks/usePrimaryBtn";
import { Link } from "react-router";

const Login = () => {
    const primaryBtn = usePrimaryBtn();
  return (
    <div className="flex justify-center item-center min-h-screen py-10 lg:px-20 px-6">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-20">
        {/* left */}
        <div className="flex-1">
          <img
            className="rounded-2xl h-full shadow-primary shadow-2xl"
            src={registerImg}
            alt=""
          />
        </div>
        {/* right */}
        <div className="flex-1 p-6">
          <h2 className="text-3xl lg:text-4xl font-bold  py-6">
            Welcome Back
          </h2>
          <p className="text-transparent bg-linear-to-r from-primary to-accent bg-clip-text">Login With ReCloset</p>

          {/* Form */}
          <form className="space-y-4 bg-transparent pt-10">

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered bg-transparent border-0 border-b-2  rounded-0 w-full"
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered bg-transparent border-0 border-b-2  rounded-0 w-full"
              required
            />


            {/* Register Button */}
            <button className="btn btn-block mt-4 btn-primary font-bold shadow-2xl shadow-primary border-0 bg-linear-to-r text-black hover:bg-linear-to-l from-primary to-accent">Login Now</button>
          </form>

          {/* Already have account */}
          <p className="mt-6 text-sm text-center">
            Don't have any account?{" "}
            <Link to="/register" className="inline text-primary cursor-pointer hover:underline">
              Register
            </Link>
          </p>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <button className="btn btn-outline w-full flex items-center gap-2">
            <FaGoogle className="text-yellow-500" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
