import { useQuery } from "@tanstack/react-query";
import { FaMoneyBillWave } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllTransactions = () => {
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["all-transactions"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <section className="px-4 py-16 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-heading font-bold">
            All <span className="text-primary">Transactions</span>
          </h2>
          <p className="text-base-content/70 mt-2">
            Complete record of all successful payments made on ReCloset
          </p>
        </div>

        {/* Summary Card */}
        <div className="mb-6">
          <div className="card bg-base-200 shadow-md w-fit">
            <div className="card-body flex flex-row items-center gap-4">
              <div className="bg-success text-white p-4 rounded-xl text-2xl">
                <FaMoneyBillWave />
              </div>
              <div>
                <p className="text-sm text-base-content/60">
                  Total Transactions
                </p>
                <h3 className="text-2xl font-bold">
                  {payments.length}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto bg-base-200 rounded-xl shadow">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td className="break-all">{payment.email}</td>
                  <td className="text-xs break-all">
                    {payment.transactionId}
                  </td>
                  <td className="font-semibold">
                    {payment.amount} TK
                  </td>
                  <td className="capitalize">
                    {payment.paymentMethod?.join(", ")}
                  </td>
                  <td>
                    {new Date(payment.paid_date).toLocaleDateString()}
                  </td>
                </tr>
              ))}

              {payments.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-base-content/60">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default AllTransactions;
