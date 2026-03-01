"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NavLink from "next/link";
import type { HeaderData } from "@/types/types.header";

export default function HeaderClient({
  headerData,
  className,
}: {
  headerData: HeaderData;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setOpen(false);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  const menuBase =
    "flex transition-all duration-200 ease-out overflow-hidden sm:h-fit flex-col sm:flex-row items-center justify-evenly top-13 right-0 fixed gap-2 w-full sm:w-auto bg-purple-600 sm:px-1 sm:py-1 rounded-2xl sm:rounded-full sm:flex sm:static";

  const menuClass = open ? `${menuBase} active p-3` : `${menuBase} h-0`;

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
            className={menuClass}
            aria-hidden={!open}
            aria-live="polite"
          >
            <NavLink
              href="/"
              onClick={() => setOpen(false)}
              className="px-1.5 py-1 sm:py-0 rounded-full active:bg-purple-500 hover:bg-purple-500"
            >
              INICIO
            </NavLink>
            {headerData?.CollectionPage && (
              <NavLink
                href={headerData.CollectionPage}
                onClick={() => setOpen(false)}
                className="px-1.5 py-1 sm:py-0 rounded-full active:bg-purple-500 hover:bg-purple-500"
              >
                COLECCIONES
              </NavLink>
            )}
            {headerData?.ProjectPage && (
              <NavLink
                href={headerData.ProjectPage}
                onClick={() => setOpen(false)}
                className="px-1.5 py-1 sm:py-0  rounded-full active:bg-purple-500 hover:bg-purple-500"
              >
                PROYECTOS
              </NavLink>
            )}
          </aside>

          <button
            id="hamburger-button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex gap-1.5 flex-col bg-purple-600 py-1 px-3 rounded-full cursor-pointer sm:hidden"
            type="button"
          >
            <span className="w-5 h-1 bg-purple-200 rounded-full" />
            <span className="w-5 h-1 bg-purple-200 rounded-full" />
            <span className="w-5 h-1 bg-purple-200 rounded-full" />
          </button>
        </nav>
      </div>
    </header>
  );
}
