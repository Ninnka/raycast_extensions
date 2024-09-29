import { closeMainWindow } from "@raycast/api";
import { exec } from "child_process";
import { getAppkeyAlias } from "./util";

const appKey = getAppkeyAlias();

export default async function Command() {
  exec(`${appKey} -n`);
  closeMainWindow();
  return null;
}
