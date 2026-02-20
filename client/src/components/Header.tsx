import { getHeaderData } from "@/libs/header.api";
import HeaderClient from "@/components/HeaderClient";

export default async function Header({ className }: { className?: string }) {
  let headerData;
  try {
    headerData = await getHeaderData();
  } catch (error) {
    console.error("Error loading header:", error);
    return null;
  }

  if (!headerData) return null;

  return <HeaderClient headerData={headerData} className={className} />;
}
