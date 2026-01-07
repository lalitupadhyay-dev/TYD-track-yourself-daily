import type { Sidebar } from "../constants/constants.ts";

export type SidebarState = Record<string, boolean>;

function prepareInitialStateForSidebar(sidebarData: Sidebar[]): SidebarState {
  // {
  //     "dashboard": {
  //         hasChildren: true,
  //         isOpen: false,
  //     }
  // }

  let initialState: SidebarState = {};

  sidebarData.map(menuItem => {
    initialState = {
      ...initialState,
      [menuItem.name.toLowerCase()]: false,
    };
  });
  return initialState;
}

export default prepareInitialStateForSidebar;
