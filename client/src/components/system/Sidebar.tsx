import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { sidebar } from "../../constants/constants.ts";
import Accordian from "./Accordian.tsx";
import prepareInitialStateForSidebar, {
  type SidebarState,
} from "../../utils/prepareInitialStateForSidebar.ts";

const Sidebar = React.memo(() => {
  const location = useLocation();

  const [sidebarState, setSidebarState] = useState<SidebarState>({});

  let initialState = prepareInitialStateForSidebar(sidebar);

  useEffect(() => {
    if (location.pathname.split("/").includes("tasks")) {
      initialState["tasks"] = true;
      initialState["workspaces"] = false;
    } else if (location.pathname.split("/").includes("workspaces")) {
      initialState["tasks"] = false;
      initialState["workspaces"] = true;
    }
    setSidebarState(initialState);
  }, [location]);

  return (
    <section className="w-[15%] px-2 border-r border-neutral-600">
      {sidebar.map(menuItem => {
        initialState = {
          ...initialState,
          [menuItem.name.toLowerCase()]: false,
        };

        return (
          <Accordian
            {...menuItem}
            wrapperClesses="p-2"
            activeClasses={"bg-neutral-800 "}
            notActiveClasses="bg-black "
            defaultClasses="border-b border-neutral-400 px-2 py-2 flex items-center gap-2 text-sm font-semibold dark:text-white"
            sidebarState={sidebarState}
          />
        );
      })}
    </section>
  );
});

export default Sidebar;
