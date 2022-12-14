const EFTA_PROJECTS = [
  {
    name: "Environment for the Americas",
    slug: "efta-main",
    url: "https://www.environmentamericas.org",
  },
  {
    name: "Mosaics in Science",
    slug: "mosaics",
    url: "https://www.mosaicsinscience.org",
  },
  {
    name: "Western Hummingbird Partnership",
    slug: "whp",
    url: "https://westernhummingbirdpartnership.org",
  },
  {
    name: "Web Hosting",
    slug: "hosting",
    url: "https://www.siteground.com",
  },
  {
    name: "Misc",
    slug: "misc",
    url: "",
  },
];

export function getProjectName(projectSlug) {
  return EFTA_PROJECTS.find((project) => project.slug === projectSlug);
}

export const eftaProjectsToSelectFormat = EFTA_PROJECTS.map((project) => {
  return { value: project.slug, label: project.name };
});

export default EFTA_PROJECTS;
