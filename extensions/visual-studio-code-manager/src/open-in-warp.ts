const warpUri = (path: string) => `warp://${path}`;

export const newWarpTab = (path: string) => warpUri(`action/new_tab?path=${encodeURIComponent(path)}`);
export const newWarpWindow = (path: string) => warpUri(`action/new_window?path=${encodeURIComponent(path)}`);
export const launchConfig = (path: string) => warpUri(`launch/${encodeURIComponent(path)}`);
