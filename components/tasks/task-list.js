import { useState, useEffect } from "react";
import Task from "./task";
import Desk from "../visuals/illustrations/desk";
import EmptyState from "../ui/empty-state";
import TaskSkeleton from "../ui/skeletons/task-skeleton";

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
    return (
      <div className="flex flex-col gap-4">
        <TaskSkeleton />
        <TaskSkeleton />
        <TaskSkeleton />
      </div>
    );
  }

  if (!isLoading && tasks.length > 0) {
    return (
      <ul className="flex flex-col gap-4">
        {tasks.map((task) => (
          <li>
            <Task
              key={task.slug}
              title={task.title}
              description={task.description}
              slug={task.slug}
              website={task.website}
              priority={task.priority}
              taskType={task.taskType}
              date={task.date}
            />
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
