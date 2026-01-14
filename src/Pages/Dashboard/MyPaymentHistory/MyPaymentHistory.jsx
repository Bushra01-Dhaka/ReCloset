import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const MyPaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payment-history", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            My <span className="text-primary">Payment History</span>
          </h2>
          <p className="text-base-content/70 mt-2">
            View all your completed payments and transaction details
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto card bg-base-200 shadow-xl">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Amount</th>
                <th>Transaction ID</th>
                <th>Payment Method</th>
                <th>Paid Date</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td className="font-semibold">{payment.amount} TK</td>
                  <td className="text-xs break-all">
                    {payment.transactionId}
                  </td>
                  <td className="capitalize">
                    {payment.paymentMethod?.join(", ")}
                  </td>
                  <td>
                    {new Date(payment.paid_date).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty State */}
          {payments.length === 0 && (
            <div className="text-center py-10 text-base-content/60">
              No payment history found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyPaymentHistory;
