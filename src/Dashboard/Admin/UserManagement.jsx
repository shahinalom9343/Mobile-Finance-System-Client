import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import UpdateUserModal from "../UpdateUserModal";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const userEmail = localStorage.getItem("userEmail");
  const userRole = localStorage.getItem("userRole");
  const [isOpen, setIsOpen] = useState(false);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");
      return result.data;
    },
  });
  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(
        `/users/update/${userEmail}`,
        role
      );
      return data;
    },
    onSuccess: (data) => {
      refetch();
      console.log(data);
      toast.success("UserRole updated successfully!");
      setIsOpen(false);
    },
  });
  //   modal handler
  const modalHandler = async (selected) => {
    const userRole = {
      role: selected,
      status: "Verified",
    };

    try {
      await mutateAsync(userRole);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Nos.</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone Number</th>
              <th className="p-3 text-right">Coins</th>
              <th className="p-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
              >
                <td className="p-3">
                  <p>{index + 1}</p>
                </td>
                <td className="p-3">
                  <p>{user.name}</p>
                </td>
                <td className="p-3">
                  <p>{user.email}</p>
                </td>
                <td className="p-3">
                  <p>{user.phone}</p>
                </td>
                <td className="p-3 text-right">
                  <p>{user.bonus}</p>
                </td>
                <td>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-green-200 rounded-lg"
                    ></span>
                    <span className="relative">Update Role</span>
                  </button>
                  {/* Update User Modal */}
                  <UpdateUserModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    modalHandler={modalHandler}
                    user={user}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UserManagement;
