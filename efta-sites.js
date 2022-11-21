const EFTA_SITES = [
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
];

export function getProjectName(projectSlug) {
  return EFTA_SITES.find((site) => site.slug === projectSlug);
}

export default EFTA_SITES;
