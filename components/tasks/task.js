import Badge from "../ui/badge";
import Card from "../ui/card";
import DropdownMenu from "../ui/dropdown-menu";
import DropdownMenuItem from "../ui/dropdown-menu-item";
import ActionsIcon from "../visuals/icons/actions-icon";
import DeleteIcon from "../visuals/icons/delete-icon";
import { useRouter } from "next/router";
import { useState } from "react";

import {
  getPriority,
  convertDate,
  getProjectName,
} from "../../helpers/utility-helpers";

function Task(props) {
  const { title, description, slug, project, priority, taskType, date, id } =
    props;

  const router = useRouter();
  const [isSending, setIsSending] = useState(false);

  // Get the priority text and color
  const { priorityText, priorityColor } = getPriority(priority);

  // And we need to capitalize the task type
  const taskTypeCapitalized =
    taskType.charAt(0).toUpperCase() + taskType.slice(1);

  // And we format the date
  const formattedDate = convertDate(date);

  // Take the website and get back a project name
  const projectName = getProjectName(project);

  function deleteHandler() {
    setIsSending(true);

    const reqBody = {
      id: id,
    };

    fetch("/api/tasks", {
      method: "DELETE",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        response.json().then((data) => {
          throw new Error(data.message || "Something Went Wrong");
        });
      })
      .then((data) => {
        setIsSending(false);
        router.reload();
      })
      .catch((error) => {
        console.log("Something went wrong");
      });
  }

  return (
    <Card>
      <div className="flex flex-row">
        <h2 className="text-lg text-d10 font-semibold mb-2 grow">{title}</h2>
        <DropdownMenu
          triggerIcon={<ActionsIcon />}
          hasSpinner={true}
          isSpinning={isSending}
        >
          <DropdownMenuItem
            icon={<DeleteIcon size="s" />}
            text="Delete Task"
            onClick={deleteHandler}
          />
        </DropdownMenu>
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
