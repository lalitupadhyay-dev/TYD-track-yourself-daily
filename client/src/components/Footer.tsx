import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [classChangeFlag, setClassChangeFlag] = useState<boolean>(false);

  const modifyFooter = () => {
    location.pathname
      .split("/")
      .filter(val => val === "users" || val === "tasks").length > 0
      ? setClassChangeFlag(true)
      : setClassChangeFlag(false);
  };

  useEffect(() => {
    modifyFooter();
  }, []);

  return (
    <footer
      className={
        (classChangeFlag ? "h-[5%] pt-1 " : "px-8 py-6 ") +
        "border-t border-neutral-900  text-center text-xs text-gray-500"
      }
    >
      © 2025 Task Manager · Built for modern teams
    </footer>
  );
};

export default Footer;
