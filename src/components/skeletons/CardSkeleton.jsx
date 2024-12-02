import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, CardContent } from "@/components/ui/Card";

export function CardSkeleton() {
  return (
    <Card className="w-full max-w-sm sm:w-96 h-48 sm:h-56">
      <CardContent className="flex flex-col justify-between h-full p-6">
        <div className="space-y-2">
          <Skeleton width={100} height={16} />
          <Skeleton width={150} height={24} />
        </div>
        <div className="space-y-4">
          <Skeleton width="100%" height={24} />
          <div className="flex justify-between">
            <Skeleton width={120} height={16} />
            <Skeleton width={80} height={16} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
