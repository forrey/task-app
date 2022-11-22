import { useState } from "react";
import Container from "../components/layout/container";
import Header from "../components/layout/header";
import TaskList from "../components/tasks/task-list";

function HomePage() {
  const [numTasks, setNumTasks] = useState();

  return (
    <div className="flex-1 justify-center">
      <Container>
        <Header
          text="Open Tasks"
          buttonText="New task"
          hasButton={true}
          hasCounter={true}
          numItems={numTasks}
        />

        <TaskList setNumTasks={setNumTasks} />
      </Container>
    </div>
  );
}

export default HomePage;
