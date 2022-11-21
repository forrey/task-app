import EFTA_SITES from "../efta-sites";

export function getPriority(priority) {
  let text = "";
  let color = "";

  if (priority === "1") {
    text = "Critical";
    color = "bg-critical";
  } else if (priority === "2") {
    text = "High";
    color = "bg-high";
  } else if (priority === "3") {
    text = "Medium";
    color = "bg-medium";
  } else if (priority === "4") {
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
  return EFTA_SITES.find((site) => site.slug === projectSlug).name;
}