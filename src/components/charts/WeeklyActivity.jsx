import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "../ui/Card";

const data = [
  { name: "Sat", deposit: 200, withdraw: 400 },
  { name: "Sun", deposit: 100, withdraw: 300 },
  { name: "Mon", deposit: 250, withdraw: 300 },
  { name: "Tue", deposit: 400, withdraw: 450 },
  { name: "Wed", deposit: 300, withdraw: 150 },
  { name: "Thu", deposit: 250, withdraw: 400 },
  { name: "Fri", deposit: 350, withdraw: 400 },
];

export default function WeeklyActivity() {
  return (
    <Card>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                barSize={10}
                dataKey="withdraw"
                fill="black"
                radius={[12, 12, 0, 0]}
              />
              <Bar
                barSize={10}
                dataKey="deposit"
                fill="#3618ff"
                radius={[12, 12, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
