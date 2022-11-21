import Container from "../components/layout/container";
import Header from "../components/layout/header";
import TaskList from "../components/tasks/task-list";
import EmptyState from "../components/ui/empty-state";
import Desk from "../components/visuals/illustrations/desk";

function HomePage(props) {
  return (
    <div className="flex-1 justify-center">
      <Container>
        <Header
          text="Open Tasks"
          buttonText="New task"
          hasButton={true}
          hasCounter={true}
        />

        <TaskList />
      </Container>
    </div>
  );
}

export default HomePage;
