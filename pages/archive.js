import { useState } from "react";
import Container from "../components/layout/container";
import Header from "../components/layout/header";
import TaskList from "../components/tasks/task-list";

function ArchivePage() {
  const [numTasks, setNumTasks] = useState();

  return (
    <div className="flex-1 justify-center">
      <Container>
        <Header
          text="Archived Tasks"
          hasButton={false}
          hasCounter={true}
          numItems={numTasks}
        />

        <TaskList setNumTasks={setNumTasks} taskCategory="archived" />
      </Container>
    </div>
  );
}

export default ArchivePage;
