import { NavLink } from "react-router-dom";
import type { Sidebar } from "../../constants/constants.ts";
import type { SidebarState } from "../../utils/prepareInitialStateForSidebar.ts";

interface AccordianProps extends Sidebar {
  wrapperClesses: string;
  activeClasses: string;
  notActiveClasses: string;
  defaultClasses: string;
  sidebarState: SidebarState;
}

function Accordian({
  name,
  route,
  icon,
  children,
  wrapperClesses,
  activeClasses,
  notActiveClasses,
  defaultClasses,
  sidebarState,
}: AccordianProps) {
  const Icon = icon;
  const lowercaseName = name.toLowerCase();

  return (
    <div
      id={lowercaseName}
      key={lowercaseName}
      className={`${wrapperClesses} flex flex-col gap-1`}
    >
      <NavLink
        className={({ isActive }) =>
          (isActive ? activeClasses : notActiveClasses) +
          defaultClasses +
          " flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-neutral-800"
        }
        to={route}
      >
        <Icon className="text-neutral-400" />
        <span className="text-neutral-200">{name}</span>
      </NavLink>

      {children && children.length > 0 && (
        <div
          className={
            (sidebarState[lowercaseName] ? "max-h-40 " : "max-h-0 ") +
            "ml-4 overflow-hidden transition-all duration-300 ease-in-out border-l border-neutral-700"
          }
        >
          <div className="flex flex-col gap-1 pl-3 pt-1">
            {children.map(submenu => {
              const InnerIcon = submenu.icon;
              return (
                <NavLink
                  key={submenu.route}
                  className={({ isActive }) =>
                    (isActive
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-400 hover:bg-neutral-900") +
                    " flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium transition-colors duration-200"
                  }
                  to={submenu.route}
                >
                  <InnerIcon className="text-neutral-500" />
                  <span>{submenu.name}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordian;
