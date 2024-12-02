import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, CardContent } from "@/components/ui/Card";

export function ChartSkeleton() {
  return (
    <Card>
      <CardContent>
        <Skeleton height={200} />
      </CardContent>
    </Card>
  );
}
