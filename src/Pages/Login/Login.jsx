import { FaGoogle } from "react-icons/fa";
import registerImg from ".././../assets/log1.png";
import usePrimaryBtn from "../../Hooks/usePrimaryBtn";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "../../CustomThing/SocialLogin";

const Login = () => {
  const primaryBtn = usePrimaryBtn();
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    logIn(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      //    navigate
      toast.success("Logged In Successfully!", {
        style: {
          border: "1px solid #06B6D4",
          padding: "16px",
          color: "#06B6D4",
        },
        iconTheme: {
          primary: "#06B6D4",
          secondary: "#00000",
        },
      });
      navigate("/");
    });
  };
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
          <h2 className="text-3xl lg:text-4xl font-bold  py-6">Welcome Back</h2>
          <p className="text-transparent bg-linear-to-r from-primary to-accent bg-clip-text">
            Login With ReCloset
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 bg-transparent pt-10"
          >
            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered bg-transparent border-0 border-b-2  rounded-0 w-full"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p
                role="alert"
                className=" font-semibold px-2 text-[14px] text-red-500"
              >
                Email is required
              </p>
            )}

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered bg-transparent border-0 border-b-2  rounded-0 w-full"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
            />
            {errors.password?.type === "required" && (
              <p
                role="alert"
                className=" font-semibold px-2 text-[14px] text-red-500"
              >
                Password is required
              </p>
            )}

            {errors.password?.type === "minLength" && (
              <p
                role="alert"
                className=" font-semibold px-2 text-[14px] text-red-500"
              >
                Password should have 6 digits or more
              </p>
            )}

            {errors.password?.type === "pattern" && (
              <p
                role="alert"
                className=" font-semibold px-2 text-[14px] text-red-500"
              >
                Password must have 1 uppercase, 1 lowercase and 1 special
                character.
              </p>
            )}

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-block mt-4 btn-primary font-bold shadow-2xl shadow-primary border-0 bg-linear-to-r text-black hover:bg-linear-to-l from-primary to-accent"
            >
              Login Now
            </button>
          </form>

          {/* Already have account */}
          <p className="mt-6 text-sm text-center">
            Don't have any account?{" "}
            <Link
              to="/register"
              className="inline text-primary cursor-pointer hover:underline"
            >
              Register
            </Link>
          </p>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
         <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
