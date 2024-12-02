import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card } from "@/components/ui/Card";

const data = [
  { name: "Entertainment", value: 30, color: "#2B3674" },
  { name: "Investment", value: 20, color: "#4318FF" },
  { name: "Bill Expense", value: 15, color: "#FF8B1A" },
  { name: "Others", value: 35, color: "#171717" },
];

export default function ExpenseStatistics() {
  const RADIAN = Math.PI / 180;
  return (
    <Card className="w-full">
      <div className="p-6">
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={0}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  percent,
                }) => {
                  const radius =
                    innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {`${(percent * 100).toFixed(0)}%`}
                      <br />
                    </text>
                  );
                }}
                labelLine={false}
                paddingAngle={2}
                outerRadius={80}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="none"
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 rounded-lg shadow-lg border">
                        <p className="text-sm font-medium">{payload[0].name}</p>
                        <p className="text-sm text-gray-600">{`${payload[0].value}%`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}
