/*v0 by Vercel.
 * @see https://v0.dev/t/hz9bAciqMCx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { NavLink, Outlet } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

export default function RootLayout() {
  return (
    <div>
      <header className="flex h-16 w-full items-center px-4 md:px-6">
        <NavLink className="flex items-center gap-2 mr-auto" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Acme Inc</span>
        </NavLink>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink className="text-sm font-medium hover:underline" href="#">
            Home
          </NavLink>
          <NavLink className="text-sm font-medium hover:underline" href="#">
            About
          </NavLink>
          <NavLink className="text-sm font-medium hover:underline" href="#">
            Projects
          </NavLink>
          <NavLink className="text-sm font-medium hover:underline" href="#">
            Skills
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <form className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-8 w-[200px] md:w-[300px]"
              placeholder="Search..."
              type="search"
            />
          </form>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <NavLink
                  className="text-sm font-medium hover:underline"
                  href="#"
                >
                  Home
                </NavLink>
                <NavLink
                  className="text-sm font-medium hover:underline"
                  href="#"
                >
                  About
                </NavLink>
                <NavLink
                  className="text-sm font-medium hover:underline"
                  href="#"
                >
                  Services
                </NavLink>
                <NavLink
                  className="text-sm font-medium hover:underline"
                  href="#"
                >
                  Contact
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
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
