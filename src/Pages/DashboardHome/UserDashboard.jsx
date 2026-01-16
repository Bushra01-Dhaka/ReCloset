import { useQuery } from "@tanstack/react-query";
import { FaHeart, FaHandsHelping } from "react-icons/fa";

import UserCard from "../../CustomThing/UserCard";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UserDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  /* Check if user is a donate member */
  const { data: donateMembers = [], isLoading } = useQuery({
    queryKey: ["donate-member", user?.email],
    enabled: !!user?.email,
    queryFn: async () =>
      (await axiosSecure.get("/donateMembers")).data,
  });

  const isDonateMember = donateMembers.some(
    (member) => member.email === user?.email
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Welcome Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Welcome back,{" "}
            <span className="text-primary">
              {user?.displayName || "Friend"}
            </span>{" "}
            👋
          </h2>
          <p className="text-base-content/70 mt-2">
            Your kindness makes a real difference in people’s lives.
          </p>
        </div>

        {/* 💖 Donate Member Banner */}
        {isDonateMember && (
          <div className="mb-12 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">

              <div className="text-5xl">
                <FaHeart />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Thank You for Being a Donor ❤️
                </h3>
                <p className="text-white/90 max-w-2xl">
                  Your continued generosity brings warmth, dignity, and hope
                  to those who need it most. Every cloth you donate carries
                  kindness and care — and it truly changes lives.
                </p>

                <p className="mt-4 italic text-white/90">
                  “Small acts of kindness can make a big difference.”
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Simple User Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <UserCard
            title="Donate Clothes"
            description="Share what you no longer need and help someone in need."
            icon={<FaHandsHelping />}
            link="/donateCloths"
          />

          <UserCard
            title="Browse Collections"
            description="Explore available clothes shared by our community."
            icon={<FaHeart />}
            link="/browseCollections"
          />

        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
