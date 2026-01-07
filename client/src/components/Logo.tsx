import { logoText } from "../constants/constants.ts";

function Logo() {
  return (
    <div className="h-full">
      <span className="font-bold text-2xl dark:text-white">
        {logoText.toUpperCase()}
      </span>
    </div>
  );
}

export default Logo;
