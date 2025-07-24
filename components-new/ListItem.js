import { CheckIcon } from "lucide-react";

const ListItem = ({ text }) => {
  return (
    <li className="flex items-center gap-2">
      {/* tick symbol */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4 text-green-500"
      >
        <path
          fillRule="evenodd"
          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
          clipRule="evenodd"
        />
      </svg> */}
      <CheckIcon className="h-4 w-4 text-green-500" />
      {text}
    </li>
  );
};
export default ListItem;
