import Container from "../components/layout/container";
import SkeletonBase from "../components/ui/skeletons/skeleton-base";
import TaskSkeleton from "../components/ui/skeletons/task-skeleton";

function TestingPage() {
  return (
    <div className="flex-1 justify-center">
      <Container>
        <TaskSkeleton />
      </Container>
    </div>
  );
}

export default TestingPage;
