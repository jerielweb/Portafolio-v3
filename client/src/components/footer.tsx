import Link from "next/link";
import { getFooterData } from "@/libs/footer.api";
import type { Footer } from "@/types/types.footer";

export default async function Footer() {
  const footerData: Footer | null = await getFooterData();
  if (!footerData) return null;
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex w-full text-purple-50/40 justify-center items-center flex-col h-20 mt-10 text-center text-balance">
      <p className="flex flex-row gap-2">
        <span>
          <Link
            target="_blank"
            className="hover:text-blue-500 active:text-blue-500 size-fit"
            href={footerData.Facebook}
          >
            Facebook
          </Link>
        </span>
        <span>
          <Link
            target="_blank"
            className="hover:text-blue-500 active:text-blue-500 size-fit"
            href={footerData.Linkdedin}
          >
            Linkedin
          </Link>
        </span>
      </p>
      <p>
        &copy; {currentYear} JERIEL BECKFORD. Licenciado bajo la Licencia MTI
      </p>
    </footer>
  );
}
