import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import { useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const axiosPublic = useAxios();
  const { user, googleLogIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleGoogleLogin = () => {
    googleLogIn().then((result) => {
      const user = result.user;
      console.log(user);

      // user Info
      const userInfo = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
        role: "user",
        created_at: new Date().toISOString(),
      };

      axiosPublic
        .post("/users", userInfo)
        .then((res) => {
          console.log("User data has been stored", res.data);
          toast.success("Logged in Successfully!");
          // navigate
          navigate(from);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Logged in Fail.");
        });
    });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="btn btn-outline w-full flex items-center gap-2"
    >
      <FaGoogle className="text-yellow-500" />
      Continue with Google
    </button>
  );
};

export default SocialLogin;
