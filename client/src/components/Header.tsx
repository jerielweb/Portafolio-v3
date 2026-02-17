import NavLink from "next/link";
import { getHeaderData } from "@/libs/header.api";

/**
 * Header Component - Server Component
 * ISR Strategy: Cache for 7 days (604800 seconds)
 * The revalidate timing is set at the page level that imports this component
 */
export default async function Header({ className }: { className?: string }) {
  let headerData;
  try {
    headerData = await getHeaderData();
  } catch (error) {
    console.error("Error loading header:", error);
    return null;
  }

  if (!headerData) return null;

  return (
    <header className={className}>
      <div className="flex bg-purple-600/30 justify-between w-300 px-2 h-11 items-center rounded-full backdrop-blur-sm text-purple-50 font-bold">
        <div>
          <NavLink
            className="bg-purple-600 px-3 py-1 rounded-full cursor-pointer hidden sm:flex font-concert"
            href={headerData?.HomeLink || "/"}
          >
            <span>JERIEL</span>
            <span>BECKFORD</span>
          </NavLink>
          <NavLink
            className="bg-purple-600 px-3 py-1 rounded-full cursor-pointer flex sm:hidden font-concert"
            href={headerData?.HomeLink || "/"}
          >
            <span>J</span>
            <span>B</span>
          </NavLink>
        </div>
        <nav className="flex gap-2 items-center">
          <div>
            {headerData?.Download?.url && (
              <a
                href={headerData.Download.url}
                className="flex rounded-full py-1 px-2 bg-purple-500 hover:bg-purple-600 active:bg-purple-600"
                title="Jeriel Beckford CV"
                download="Jeriel Beckford CV.pdf"
              >
                DESCARGAR CV
              </a>
            )}
          </div>

          <aside
            id="mobile-menu"
            className="flex transition-all duration-200 ease-out overflow-hidden sm:h-fit flex-col sm:flex-row items-center justify-evenly top-13 right-0 fixed gap-2 w-full sm:w-auto bg-purple-600 sm:px-1 sm:py-1 rounded-2xl sm:rounded-full sm:flex sm:static h-0"
          >
            <NavLink
              href="/"
              className="px-1.5 rounded-full active:bg-purple-500 hover:bg-purple-500"
            >
              INICIO
            </NavLink>
            {headerData?.CollectionPage && (
              <NavLink
                href={headerData.CollectionPage}
                className="px-1.5 rounded-full active:bg-purple-500 hover:bg-purple-500"
              >
                COLECCIONES
              </NavLink>
            )}
            {headerData?.ProjectPage && (
              <NavLink
                href={headerData.ProjectPage}
                className="px-1.5 rounded-full active:bg-purple-500 hover:bg-purple-500"
              >
                PROYECTOS
              </NavLink>
            )}
          </aside>
          <div
            id="hamburger-button"
            className="flex gap-1.5 flex-col bg-purple-600 py-1 px-3 rounded-full cursor-pointer sm:hidden"
          >
            <span className="cursor-pointer w-5 h-1 bg-purple-200 rounded-full"></span>
            <span className="cursor-pointer w-5 h-1 bg-purple-200 rounded-full"></span>
            <span className="cursor-pointer w-5 h-1 bg-purple-200 rounded-full"></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
