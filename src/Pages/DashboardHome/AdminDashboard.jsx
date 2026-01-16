import { useQuery } from "@tanstack/react-query";
import {
  FaUsers,
  FaDonate,
  FaShoppingBag,
  FaMoneyBillWave,
  FaHeart,
  FaHandsHelping,
} from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => (await axiosSecure.get("/users/count")).data,
  });

  const { data: donations = [] } = useQuery({
    queryKey: ["admin-donations"],
    queryFn: async () => (await axiosSecure.get("/cloths/donate")).data,
  });

  const { data: resellItems = [] } = useQuery({
    queryKey: ["admin-resell"],
    queryFn: async () => (await axiosSecure.get("/cloths/resell")).data,
  });

  const { data: payments = [] } = useQuery({
    queryKey: ["admin-payments"],
    queryFn: async () => (await axiosSecure.get("/payments")).data,
  });

  const { data: wishlist = [] } = useQuery({
    queryKey: ["admin-wishlist"],
    queryFn: async () => (await axiosSecure.get("/wishlist/count")).data,
  });

  const { data: donateMembers = [] } = useQuery({
    queryKey: ["admin-donate-members"],
    queryFn: async () => (await axiosSecure.get("/donateMembers")).data,
  });

  const totalRevenue = payments.reduce((sum, p) => sum + Number(p.amount), 0);

  const chartData = [
    {
      name: "Users",
      count: users.count,
    },
    {
      name: "Donations",
      count: donations.length,
    },
    {
      name: "Resell",
      count: resellItems.length,
    },
    {
      name: "Wishlist",
      count: wishlist.count,
    },
    {
      name: "Members",
      count: donateMembers.length,
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Admin <span className="text-primary">Dashboard</span>
          </h2>
          <p className="text-base-content/70 mt-2">
            Overview of platform activity and statistics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <DashboardCard
            title="Users"
            value={users.count}
            icon={<FaUsers />}
            color="bg-primary"
          />

          <DashboardCard
            title="Donations"
            value={donations.length}
            icon={<FaDonate />}
            color="bg-black"
          />

          <DashboardCard
            title="Resell Items"
            value={resellItems.length}
            icon={<FaShoppingBag />}
            color="bg-accent"
          />

          <DashboardCard
            title="Revenue"
            value={`${totalRevenue} TK`}
            icon={<FaMoneyBillWave />}
            color="bg-success"
          />

          <DashboardCard
            title="Wishlist"
            value={wishlist.count}
            icon={<FaHeart />}
            color="bg-error"
          />

          <DashboardCard
            title="Donate Members"
            value={donateMembers.length}
            icon={<FaHandsHelping />}
            color="bg-warning"
          />
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="mt-16 bg-base-200 p-6 rounded-xl shadow-xl shadow-primary">
        <h3 className="text-xl font-bold mb-6">Platform Activity Overview</h3>

        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              {/* <Bar dataKey="count" fill="#16a34a" radius={[6, 6, 0, 0]} /> */}
              <Bar dataKey="count">
                {chartData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={
                      ["#2563eb", "#3A7242", "#9333ea", "#dc2626", "#f59e0b"][
                        index
                      ]
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;

/* ================= Reusable Card ================= */

const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body flex flex-row items-center gap-4">
        <div className={`text-white text-2xl p-4 rounded-xl ${color}`}>
          {icon}
        </div>
        <div>
          <p className="text-base-content/60 text-sm">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      </div>
    </div>
  );
};
