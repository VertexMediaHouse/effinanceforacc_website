import { useNavigate, useLocation } from "react-router-dom";
import { type ReactNode, type MouseEvent } from "react";

/**
 * HashLinkConditional navigates to a path with hash if the target element exists.
 * If the target element (by id) does not exist on the page, it navigates to the path
 * without the hash fragment, effectively avoiding a scroll to a non‑existent element.
 */
export function HashLinkConditional({
  to,
  smooth = true,
  children,
  className,
}: {
  to: string; // e.g., "/#Services" or "#Services"
  smooth?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Extract hash part (without '#')
    const hashIndex = to.indexOf("#");
    const path = hashIndex !== -1 ? to.substring(0, hashIndex) : to;
    const hash = hashIndex !== -1 ? to.substring(hashIndex + 1) : "";
    const targetExists = hash && document.getElementById(hash);

    // Prevent default anchor navigation
    e.preventDefault();

    if (targetExists) {
      const destination = path || location.pathname;
      navigate(`${destination}#${hash}`);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
      }
    } else {
      const destination = path || location.pathname;
      navigate(destination);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
