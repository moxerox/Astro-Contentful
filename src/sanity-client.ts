import { createClient } from "@sanity/client";

export default createClient({
  projectId: "ukfgrhqm",
  dataset: "test",
  useCdn: true, // `false` if you want fresh data
});
