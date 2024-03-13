import Link from "next/link";
import Container from "../ui/container";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "My Work", href: "#my-work" },
  { name: "Testimonials", href: "/#testimonials" },
];

const Navbar = () => {
  return (
    <Container className="py-5 flex items-center justify-between absolute top-0 left-1/2 -translate-x-1/2 w-full z-10">
      <Logo />
      <nav>
        <ul className="hidden md:flex items-center gap-x-8 lg:gap-x-10 font-light text-base">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:text-neutral-300 transition ease-in-out duration-300"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          <li>
            <Button
              size="sm"
              className="bg-white/20 font-normal rounded-sm hover:bg-white/10 hover:text-white/90"
            >
              Get in touch
            </Button>
          </li>
        </ul>
        <Menu className="md:hidden size-6 stroke-1" />
      </nav>
    </Container>
  );
};

export default Navbar;

const Logo = () => {
  return <p className="text-xl md:font-semibold">Payam.</p>;
};
