/*v0 by Vercel.
 * @see https://v0.dev/t/hz9bAciqMCx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Footer from "@/components/Footer";
import { Link } from "react-scroll";
import { Github, Terminal, TerminalIcon } from "lucide-react";

export default function RootLayout() {
  return (
    <div>
      <header className="flex h-16 w-full items-center px-4 md:px-6">
        <NavLink className="flex items-center gap-2 mr-auto" href="#">
          <TerminalIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Fayaz</span>
        </NavLink>
        <nav className="hidden items-center gap-6 md:flex cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
            className="text-sm font-medium hover:underline"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            className="text-sm font-medium hover:underline"
          >
            About
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={1000}
            className="text-sm font-medium hover:underline"
          >
            Experience
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={1000}
            className="text-sm font-medium hover:underline"
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
            className="text-sm font-medium hover:underline"
          >
            Projects
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button>
            <NavLink
              to="https://github.com/Fay4z"
              target="_blank"
              className=" cursor-pointer"
            >
              <Github />
            </NavLink>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="text-sm font-medium hover:underline"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="text-sm font-medium hover:underline"
                >
                  About
                </Link>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="text-sm font-medium hover:underline"
                >
                  Experience
                </Link>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="text-sm font-medium hover:underline"
                >
                  Skills
                </Link>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="text-sm font-medium hover:underline"
                >
                  Projects
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
