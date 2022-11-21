import { useState, useEffect } from "react";
import Task from "./task";
import Desk from "../visuals/illustrations/desk";
import EmptyState from "../ui/empty-state";

function TaskList(props) {
  const [tasks, setTasks] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.tasks);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading && tasks.length > 0) {
    return (
      <ul>
        {tasks.map((task) => (
          <li>
            <Task title={task.title} description={task.description} />
          </li>
        ))}
      </ul>
    );
  }

  if (!isLoading && tasks.length === 0) {
    return (
      <EmptyState
        illustration={<Desk />}
        text="There are currently no open tasks, we must be all caught up."
      />
    );
  }
}

export default TaskList;
