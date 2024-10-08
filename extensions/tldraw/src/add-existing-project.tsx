import { LocalStorage, showHUD } from "@raycast/api";
import { showFailureToast } from "@raycast/utils";
import { ProjectDetails, ProjectValues } from "./shared";

type Args = {
  arguments: ProjectDetails & ProjectValues;
};

export default async function Command(props: Args) {
  const { url, name, description } = props.arguments;
  if (!url.startsWith("https://www.tldraw.com/r/")) {
    showFailureToast("Invalid project URL, must start with https://www.tldraw.com/r/");
    return;
  }
  if (await LocalStorage.getItem(name)) {
    showFailureToast(`Project "${name}" already exists.`);
    return;
  }
  const values: ProjectValues = { description, url };
  await Promise.all([
    LocalStorage.setItem(name, JSON.stringify(values)),
    showHUD(`Added ${name} to the project list`, { clearRootSearch: true }),
  ]).catch((error) => showFailureToast(error, { title: "Failed to create project" }));
}
