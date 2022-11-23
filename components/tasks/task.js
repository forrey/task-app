import Badge from "../ui/badge";
import Card from "../ui/card";
import {
  getPriority,
  convertDate,
  getProjectName,
} from "../../helpers/utility-helpers";

function Task(props) {
  const { title, description, slug, project, priority, taskType, date } = props;

  // Get the priority text and color
  const { priorityText, priorityColor } = getPriority(priority);

  // And we need to capitalize the task type
  const taskTypeCapitalized =
    taskType.charAt(0).toUpperCase() + taskType.slice(1);

  // And we format the date
  const formattedDate = convertDate(date);

  // Take the website and get back a project name
  const projectName = getProjectName(project);

  return (
    <Card>
      <div>
        <h2 className="text-lg text-d10 font-semibold mb-2">{title}</h2>
      </div>
      <div>
        <p className="text-small text-d20 mb-4.5">{description}</p>
      </div>
      <div className="flex flex-row gap-3">
        <div className="flex flex-row gap-1">
          <Badge text={taskTypeCapitalized} />
          <Badge text={priorityText} color={priorityColor} />
        </div>
        <div className="h-6 text-xs text-d50 flex items-center">
          <span>{formattedDate}</span>
          <span className="mx-2">•</span>
          <span>{projectName}</span>
        </div>
      </div>
    </Card>
  );
}

export default Task;
