import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDashboardData } from "../services/api";
import { CreditCard } from "../components/cards/CreditCard";
import { CardSkeleton } from "../components/skeletons/CardSkeleton";
import { ChartSkeleton } from "../components/skeletons/ChartSkeleton";
import { Plus, Minus } from "lucide-react";

import { AuthLayout } from "../components/layout/AuthLayout";
import { Card } from "../components/ui/Card";

const WeeklyActivity = lazy(
  () => import("../components/charts/WeeklyActivity")
);
const ExpenseStatistics = lazy(
  () => import("../components/charts/ExpenseStatistics")
);
const BalanceHistory = lazy(
  () => import("../components/charts/BalanceHistory")
);
const QuickTransfer = lazy(
  () => import("../components/transfers/QuickTransfer")
);

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  return (
    <AuthLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#2B3674]">My Cards</h2>
              <button className="text-blue-600 hover:underline">See All</button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mb-4 overflow-x-auto">
              <Suspense fallback={<CardSkeleton />}>
                <CreditCard
                  dark
                  cardHolder="Eddy Cusuma"
                  validThru="12/22"
                  cardNumber="3778 **** **** 1234"
                  balance="5,756"
                />
              </Suspense>
              <Suspense fallback={<CardSkeleton />}>
                <CreditCard
                  cardHolder="Eddy Cusuma"
                  validThru="12/22"
                  cardNumber="3778 **** **** 1234"
                  balance="5,756"
                />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#2B3674]">
                Recent Transaction
              </h2>
            </div>
            <Card className="bg-white rounded-xl p-7">
              <div className="space-y-4">
                {[
                  {
                    title: "Deposit from my Card",
                    date: "28 January 2021",
                    amount: "-$850",
                    type: "negative",
                  },
                  {
                    title: "Deposit Paypal",
                    date: "25 January 2021",
                    amount: "+$2,500",
                    type: "positive",
                  },
                  {
                    title: "Jemi Wilson",
                    date: "21 January 2021",
                    amount: "+$5,400",
                    type: "positive",
                  },
                ].map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${
                          transaction.type === "positive"
                            ? "bg-green-100"
                            : "bg-red-100"
                        } flex items-center justify-center`}
                      >
                        {transaction.type === "positive" ? (
                          <Plus className="w-6 h-6 text-green-600" />
                        ) : (
                          <Minus className="w-6 h-6 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.title}</p>
                        <p className="text-sm text-gray-500">
                          {transaction.date}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`font-medium ${
                        transaction.type === "positive"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#2B3674]">
              Weekly Activity
            </h2>
          </div>
          <Suspense fallback={<ChartSkeleton />}>
            <WeeklyActivity />
          </Suspense>
        </div>
        <div className="lg:col-span-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#2B3674]">
              Expense Statistics
            </h2>
          </div>
          <Suspense fallback={<ChartSkeleton />}>
            <ExpenseStatistics />
          </Suspense>
        </div>

        <div className="lg:col-span-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#2B3674]">
              Quick Transfer
            </h2>
          </div>
          <Suspense fallback={<ChartSkeleton />}>
            <QuickTransfer />
          </Suspense>
        </div>
        <div className="lg:col-span-7">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#2B3674]">
              Balance History
            </h2>
          </div>
          <Suspense fallback={<ChartSkeleton />}>
            <BalanceHistory />
          </Suspense>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Dashboard;
