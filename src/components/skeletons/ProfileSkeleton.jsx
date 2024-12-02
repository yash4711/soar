import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function ProfileSkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-6">
        <Skeleton circle width={96} height={96} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Array(10).fill(null).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton width={80} height={16} />
            <Skeleton height={40} />
          </div>
        ))}
        <div className="md:col-span-2 flex justify-end">
          <Skeleton width={120} height={40} />
        </div>
      </div>
    </div>
  )
}

