import { useState, useEffect } from "react";
import Task from "./task";

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

  if (tasks) {
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
}

export default TaskList;
