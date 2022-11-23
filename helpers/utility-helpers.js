import EFTA_PROJECTS from "../efta-projects";

export function getPriority(priority) {
  let text = "";
  let color = "";

  if (priority === 1) {
    text = "Critical";
    color = "bg-critical";
  } else if (priority === 2) {
    text = "High";
    color = "bg-high";
  } else if (priority === 3) {
    text = "Medium";
    color = "bg-medium";
  } else if (priority === 4) {
    text = "Low";
    color = "bg-low";
  }

  return {
    priorityText: text,
    priorityColor: color,
  };
}

export function convertDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getProjectName(projectSlug) {
  return EFTA_PROJECTS.find((site) => site.slug === projectSlug).name;
}

export const priorityLevels = [
  { value: 4, label: "Low" },
  { value: 3, label: "Medium" },
  { value: 2, label: "High" },
  { value: 1, label: "Critical" },
];
