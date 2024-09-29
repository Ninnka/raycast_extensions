import { getPreferenceValues } from "@raycast/api";
import { Preferences, VSCodeBuild } from "./types";
import { appKeyMapping, appKeyMappingAlias } from "./const";

export function getAppkey() {
  const preferences: Preferences = getPreferenceValues();
  const build: VSCodeBuild = preferences.build;

  return appKeyMapping[build] ?? appKeyMapping.Code;
}

export function getAppkeyAlias() {
  const preferences: Preferences = getPreferenceValues();
  const build: VSCodeBuild = preferences.build;

  return appKeyMappingAlias[build] ?? appKeyMappingAlias.Code;
}
