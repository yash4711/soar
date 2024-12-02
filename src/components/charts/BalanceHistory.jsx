import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card, CardContent } from "@/components/ui/Card";

const data = [
  { month: "Jul", balance: 200 },
  { month: "Aug", balance: 400 },
  { month: "Sep", balance: 300 },
  { month: "Oct", balance: 700 },
  { month: "Nov", balance: 500 },
  { month: "Dec", balance: 800 },
  { month: "Jan", balance: 600 },
];

export default function BalanceHistory() {
  return (
    <Card>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
