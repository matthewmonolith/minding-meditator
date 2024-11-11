import { Link } from "react-router-dom";
import { FaCloud } from "react-icons/fa";
import { useActiveLink } from "../../utils/hooks/useActiveLink";

function Navbar() {
  const activeLink = useActiveLink();

  const links: { title: string; href: string }[] = [
    {
      title: "Timer",
      href: "/",
    },
    {
      title: "Guide",
      href: "/guide",
    },
  ];

  return (
    <div className="bg-soft-3 p-4 flex items-center relative text-white">
      <Link to="/" className="inline-block">
        <FaCloud className="text-2xl" />
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2 flex space-x-8">
        {links.map((link) => {
          const isActive = activeLink == link.href;
          return (
            <Link to={link.href} className={isActive ? "underline" : ""} key={link.title}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Navbar;
