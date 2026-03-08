import { getSkilsSections } from "@/libs/skiks.api";
import Image from "./ImageWithLoading";
import type { Skill } from "@/types/types.skills";

/**
 * SkillsList Component - Server Component
 * ISR Strategy: Cache for 7 days (604800 seconds)
 * Skills data is mostly static
 * The revalidate timing is set at the page level that imports this component
 */
export default async function SkillsList() {
  const skills = (await getSkilsSections()) as Skill[];

  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

  return (
    <section className="flex min-h-162.5 text-purple-100 flex-col gap-10 justify-center w-full items-center px-2">
      <h2 className="text-center font-extrabold sm:text-5xl text-4xl">
        Conocimientos
      </h2>
      <div className="flex max-w-5xl flex-row flex-wrap gap-5 items-center justify-center">
        {skills?.map((skill: Skill) => (
          <a
            key={skill.id}
            href={skill.url}
            className="flex items-center justify-center flex-col gap-5 rounded-3xl border-2 p-4 h-50 w-37.5 size-fit border-purple-100 hover:shadow-lg hover:shadow-purple-100 active:shadow-purple-100 transition duration-200 ease-out"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={
                skill.Logo.url.startsWith("http")
                  ? skill.Logo.url
                  : `${STRAPI_URL}${skill.Logo.url}`
              }
              className="size-27 rounded pointer-events-none aspect-square object-contain"
              alt={skill.Logo.name}
              Rounded={true}
              height={500}
              width={500}
              priority={false}
            />
            <p className="text-xl">{skill.Name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
