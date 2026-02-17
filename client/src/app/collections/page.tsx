import { getCollectionsData, STRAPI_URL } from "@/libs/collections.api";
import { Collection } from "@/types/types.collections";
import { LinkTo } from "@/components/icons";
import Image from "next/image";

export default async function CollectionsPage() {
  const collectionsData = await getCollectionsData();
  console.log(collectionsData);
  if (!collectionsData) return null;
  return (
    <section className="flex min-h-162.5 text-purple-100 flex-col gap-12 w-full items-center mt-25">
      <h1 className="text-4xl font-bold text-center">Mis Colecciones</h1>
      <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-300 w-full min-h-[70vh] px-5 place-content-center">
        {collectionsData.map((collections: Collection) => {
          const rawUrl =
            collections.shot?.formats?.small?.url || collections.shot?.url;
          const imageSrc = rawUrl
            ? rawUrl.startsWith("http")
              ? rawUrl
              : `${STRAPI_URL}${rawUrl}`
            : null;

          return (
            <article
              key={collections.id}
              className="flex flex-col gap-2 justify-center items-center max-w-sm border-2 border-purple-400 hover:border-purple-100 active:border-purple-100 transition duration-200 ease-out p-3 max-h-90 rounded-lg"
            >
              <div className="relative w-full h-44 mb-2 overflow-hidden rounded">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={collections.site_name}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition w-full h-full"
                    width={1920}
                    height={1080}
                  />
                ) : (
                  <div className="bg-zinc-800 w-full h-full flex items-center justify-center text-sm text-purple-200">
                    Sin imagen
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full ">
                <h2 className="text-[17px] font-bold">
                  {collections.site_name}
                </h2>
                <span className="text-[12px] text-purple-50/50 font-medium">
                  {collections.categorry}
                </span>
              </div>

              <div className="flex flex-col gap-3 justify-center items-center w-full">
                <a
                  href={collections.site_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[17px] text-center bg-purple-700 py-2 w-full px-5 rounded-[10px] transition active:scale-93 flex flex-row justify-center items-center gap-3"
                >
                  <p>Visitar</p>
                  <LinkTo className="size-5" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
