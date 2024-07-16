import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const Login = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");
      return result.data;
    },
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pin = form.pin.value;
    const user = users?.find(
      (user) => user?.email === email && user?.pin === pin
    );
    localStorage.setItem("userName", user.name);
    localStorage.setItem("userRole", user.role);
    if (
      user
        ? Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Login Successful !!",
            showConfirmButton: false,
            timer: 1500,
          })
        : alert("Please input the right Email or Pin number")
    )
      navigate("/");
  };
  return (
    <div className="flex flex-col max-w-md p-6 shadow-md mt-4 sm:p-10 bg-slate-200 rounded-lg  dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-600">
          Sign in to access your account
        </p>
      </div>
      <form onSubmit={handleLogin} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="pin" className="text-sm">
                Pin
              </label>
              <a className="text-xs hover:underline dark:text-gray-600">
                Forgot pin?
              </a>
            </div>
            <input
              type="pin"
              name="pin"
              id="pin"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <button
            type="submit"
            className="w-full btn btn-accent px-8 py-3 font-bold text-red-600 rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Sign in
          </button>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Do not have an account yet?
            <Link
              rel="noopener noreferrer"
              to="/register"
              className="hover:underline dark:text-violet-600"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
