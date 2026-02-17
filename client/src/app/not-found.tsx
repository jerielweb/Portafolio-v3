import Link from "next/link";
import { unstable_noStore } from "next/cache";

export default function NotFound() {
  unstable_noStore();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Página no encontrada</h2>
      <p>No pudimos encontrar el recurso solicitado.</p>
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
}
