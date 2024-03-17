import Link from "next/link";
import Container from "../ui/container";
import GetInTouch from "../get-in-touch-button";

const navLinks = [
  { name: "My Work", href: "#my-work" },
  { name: "Testimonials", href: "/#testimonials" },
];

const Navbar = () => {
  return (
    <Container className="py-5 flex items-center justify-between absolute top-0 left-1/2 -translate-x-1/2 w-full z-10">
      <Logo />
      <nav>
        <ul className="flex items-center gap-x-8 lg:gap-x-10 font-light text-base">
          <div className="hidden md:contents">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-neutral-300 transition ease-in-out duration-300"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </div>
          <li className="hidden md:block">
            <GetInTouch size="sm" />
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-xl md:font-semibold
    hover:text-neutral-300 transition ease-in-out duration-300 cursor-pointer
  "
    >
      Payam.
    </Link>
  );
};
