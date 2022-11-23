import { useState, useEffect } from "react";
import Task from "./task";
import Desk from "../visuals/illustrations/desk";
import EmptyState from "../ui/empty-state";
import TaskSkeleton from "../ui/skeletons/task-skeleton";

function TaskList(props) {
  const { setNumTasks, taskCategory } = props;
  const [tasks, setTasks] = useState();
  const [isLoading, setIsLoading] = useState(true);

  let api = "";

  if (taskCategory === "open") {
    api = "api/tasks";
  } else if (taskCategory === "archived") {
    api = "api/tasks/archived";
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.tasks);

        if (data.tasks) {
          setNumTasks(data.tasks.length);
        }

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
      <ul className="flex flex-col gap-4 pb-10">
        {tasks.map((task) => (
          <li key={task._id}>
            <Task
              title={task.title}
              description={task.description}
              slug={task.slug}
              project={task.project}
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
        text={`There are currently no ${taskCategory} tasks, we must be all caught up.`}
      />
    );
  }
}

export default TaskList;
