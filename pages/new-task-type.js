import Container from "../components/layout/container";
import Header from "../components/layout/header";
import Gear from "../components/visuals/illustrations/gear";
import LightBulb from "../components/visuals/illustrations/lightbulb";
import TaskTypeSelector from "../components/pages/new-task-type/task-type-selector";

function NewTaskTypePage() {
  return (
    <div className="flex-1 justify-center">
      <Container>
        <Header
          text="Task Type"
          hasButton={false}
          hasBack={true}
          hasCounter={false}
        />

        <div className="flex w-full gap-x-6">
          <TaskTypeSelector
            icon={<LightBulb />}
            title="New Request"
            description="New functionality, pages, content, additions, etc."
            link="/new-request"
          />

          <TaskTypeSelector
            icon={<Gear />}
            title="Bug"
            description="Something doesn’t look or behave the way it should."
            link="/new-bug"
          />
        </div>
      </Container>
    </div>
  );
}

export default NewTaskTypePage;
