import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MakeAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔍 Search users manually
  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);
      const res = await axiosSecure.get(`/users/search?q=${query}`);
      setUsers(res.data);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch users", "error");
    } finally {
      setLoading(false);
    }
  };

  // 👑 Make admin
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Make Admin?",
      text: `${user.name} will gain admin access`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Make Admin",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(user._id)
       await axiosSecure.patch(
          `/users/make-admin/${user._id}`
        )
         Swal.fire("Success", "User is now admin", "success");
          handleSearch(); // refresh list

        
      }
    });
  };

  // ❌ Remove admin
  const handleRemoveAdmin = (user) => {
    Swal.fire({
      title: "Remove Admin?",
      text: `${user.name} will lose admin privileges`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Remove",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(
          `/users/remove-admin/${user._id}`
        );

        if (res.data.modifiedCount > 0) {
          Swal.fire("Success", "Admin role removed", "success");
          handleSearch();
        }
      }
    });
  };

  return (
    <section className="py-20 px-4 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Manage <span className="text-primary">Admins</span>
          </h2>
          <p className="text-base-content/70 mt-2">
            Search users and manage admin roles
          </p>
        </div>

        {/* Search */}
        <div className="flex gap-2 mb-6 max-w-md">
          <input
            type="text"
            placeholder="Search by name or email"
            className="input input-bordered w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="btn btn-primary text-black font-bold"
          >
            Search
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        {/* Table */}
        {!loading && users.length > 0 && (
          <div className="overflow-x-auto card bg-base-200 shadow-xl">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Joined</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img src={user.photo} alt={user.name} />
                        </div>
                      </div>
                      <span className="font-semibold">{user.name}</span>
                    </td>

                    <td>{user.email}</td>

                    <td>
                      <span
                        className={`badge capitalize ${
                          user.role === "admin"
                            ? "badge-success"
                            : "badge-warning"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>

                    <td className="text-center">
                      {user.role === "admin" ? (
                        <button
                          onClick={() => handleRemoveAdmin(user)}
                          className="btn btn-xs btn-error"
                        >
                          Remove Admin
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-xs btn-primary text-black font-bold"
                        >
                          Make Admin
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty */}
        {!loading && users.length === 0 && query && (
          <p className="text-center text-base-content/60 mt-10">
            No users found
          </p>
        )}
      </div>
    </section>
  );
};

export default MakeAdmin;
