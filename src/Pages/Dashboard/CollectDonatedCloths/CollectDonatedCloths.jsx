import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CollectDonatedCloths = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");

  const {
    data: donations = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["collect-donations", search],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/cloths/donate?q=${search}`
      );
      return res.data;
    },
    enabled: true,
  });

  const handleCollect = async (donation) => {
    Swal.fire({
      title: "Confirm Collection?",
      text: "This donated cloth will be marked as collected",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      confirmButtonText: "Yes, Collect",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // 1️⃣ Update donation status
        const res = await axiosSecure.patch(
          `/cloths/donate/collect/${donation._id}`
        );

        if (res.data.modifiedCount > 0) {
          // 2️⃣ Save donor basic info
          const donateMember = {
            name: donation.donar_name,
            email: donation.donar_email,
            district: donation.donar_district,
            donationTitle: donation.title,
            collectedAt: new Date(),
          };

          await axiosSecure.post("/donateMembers", donateMember);

          Swal.fire(
            "Collected!",
            "Donation marked as collected successfully",
            "success"
          );
          refetch;
        }
      }
    });
  };

  return (
    <section className="p-8 max-w-7xl py-10 lg:py-20">
      {/* TITLE */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-2">
        Collect <span className="text-primary">Donated Cloths</span>
      </h2>
      <p className="text-gray-500 mb-6">
        Search donated items and mark them as collected
      </p>

      {/* SEARCH */}
      <div className="mb-6 max-w-md">
        <input
          type="text"
          placeholder="Search by donor name or email"
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* LOADING */}
      {isLoading && (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      {/* TABLE */}
      {!isLoading && donations.length > 0 && (
        <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Donor</th>
                <th>Cloth Type</th>
                <th>Collect Option</th>
                <th>Qty</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {donations.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td className="font-medium">{item.title}</td>

                  <td>
                    <p>{item.donar_name}</p>
                    <p className="text-xs text-gray-500">
                      {item.donar_email}
                    </p>
                  </td>

                  <td>{item.cloth_type}</td>
                  <td>{item.cloth_collect_option}</td>
                  <td>{item.cloth_num}</td>

                  <td>
                    <span
                      className={`badge ${
                        item.status === "pending"
                          ? "badge-warning"
                          : "badge-success"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="text-center">
                    {item.status === "collected" ? (
                      <span className="text-success font-semibold">
                        Collected
                      </span>
                    ) : (
                      <button
                        onClick={() => handleCollect(item)}
                        className="btn btn-xs btn-success"
                      >
                        Collect
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* EMPTY */}
      {!isLoading && donations.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No donation data found
        </p>
      )}
    </section>
  );
};

export default CollectDonatedCloths;
