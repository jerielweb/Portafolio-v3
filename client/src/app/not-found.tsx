import Link from "next/link";
import Image from "next/image";
import ErrorImg from "@/assets/error404.png";

export default function NotFound() {

  return (
  <div className="min-h-screen max-w-300 w-full flex flex-col items-center justify-center px-4 text-center gap-3">
        <div className="flex flex-col items-center mb-2 text-[150px] md:text-[200px] font-bold text-purple-700 size-full justify-center relative">
            <Image src={ErrorImg} alt="Imagen de error 404" className="w-70 md:w-90 h-auto rounded-full mask-b-from-20% pointer-events-none md:pt-15 pt-0" />
                <h1 className="absolute -bottom-15 md:-bottom-20 z-1">404</h1>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center z-10">
            <p className="text-xl mx-5">Lo sentimos, la página que buscas no se pudo encontrar.</p>
            <Link href="/" className="text-[17px] size-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93">Volver al inicio</Link>
        </div>
    </div>
  );
}
