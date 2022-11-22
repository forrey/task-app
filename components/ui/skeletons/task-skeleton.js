import Card from "../card";
import SkeletonBase from "./skeleton-base";

function TaskSkeleton() {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <SkeletonBase height="l" width="half" shape="rectangle" margin="l" />
          <SkeletonBase height="l" width="half" shape="square" margin="l" />
        </div>

        <SkeletonBase height="m" width="full" shape="rectangle" margin="xs" />
        <SkeletonBase height="m" width="full" shape="rectangle" margin="xl" />
        <div className="flex flex-row gap-2">
          <SkeletonBase height="s" width="1/4" shape="rectangle" />
          <SkeletonBase height="s" width="1/4" shape="rectangle" />
        </div>
      </div>
    </Card>
  );
}

export default TaskSkeleton;
