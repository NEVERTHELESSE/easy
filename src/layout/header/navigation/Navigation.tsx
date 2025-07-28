import { Link, useLocation } from "react-router-dom";
import { navigates } from "./navigates";

export default function Navigation() {
  const locate = useLocation().pathname;
  return (
    <nav className="sm:w-[30rem] xl:w-[50%] flex justify-around capitalize">
      {navigates.map((navigate, index) => (
        <Link
          to={navigate.link}
          key={index}
          className={`px-2
          ${navigate.link == locate && "bg-tertiary rounded-lg"}
        `}
        >
          {navigate.title}
        </Link>
      ))}
    </nav>
  );
}
