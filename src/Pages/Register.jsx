import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.number.value;
    const pin = form.pin.value;
    const userData = {
      name,
      email,
      pin,
      phone,
      bonus: 40,
      role: "user",
    };
    // console.log(userData);
    axiosPublic.post("/users", userData);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "User created Successfully !!!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <div className="flex items-center shadow-md mt-4 sm:p-10 bg-pink-100 rounded-lg justify-center text-center dark:bg-gray-50 dark:text-gray-800">
      <form
        onSubmit={handleRegister}
        className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-800"
      >
        <h2 className="font-bold text-center my-5 text-3xl">Register</h2>
        <label htmlFor="username" className="self-start text-xs font-semibold">
          Username
        </label>
        <input
          id="username"
          type="text"
          name="name"
          required
          className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
        />
        <label htmlFor="username" className="self-start text-xs font-semibold">
          Email
        </label>
        <input
          id="username"
          name="email"
          required
          type="email"
          className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
        />
        <label htmlFor="username" className="self-start text-xs font-semibold">
          Pin
        </label>
        <input
          id="pin"
          type="number"
          name="pin"
          required
          className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
        />
        <label
          htmlFor="password"
          className="self-start mt-3 text-xs font-semibold"
        >
          Phone Number
        </label>
        <input
          id="number"
          type="number"
          name="number"
          className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-600 text-gray-50"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
