import { getEducations } from "@/libs/educations.api";
import { LinkTo } from "./icons";
import type { EducationsList as EducationsListType } from "@/types/types.educations";

export default async function EducationsList() {
  const educations: EducationsListType = await getEducations();
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

  return (
    <section>
      <h1 className="text-center font-extrabold sm:text-5xl text-4xl">
        Educación
      </h1>
      <div className="size-full flex flex-wrap justify-center gap-8 mt-10">
        {educations?.map((education) => (
          <div
            className="flex flex-col gap-2 justify-center items-center max-w-sm border-2 border-purple-400 hover:border-purple-100 active:border-purple-100 transition duration-200 ease-out p-3 rounded-lg text-[15px] mx-5"
            key={education.id}
          >
            <div>
              <img
                src={education.certificate.url.startsWith('http')
                  ? education.certificate.url
                  : `${STRAPI_URL}${education.certificate.url}`}
                alt={education.title}
                className="aspect-auto w-90 h-auto pointer-events-none"
              />
            </div>
            <div>
              <h3 className="education__title">{education.title}</h3>
              <p className="education__institution">{education.Instutution}</p>
              <span className="text-[12px] text-purple-50/50 font-medium">
                {education.age}
              </span>
            </div>
            <div className="flex size-full justify-center items-center">
              <a
                href={education.link}
                className="text-[17px] w-full h-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93 font-semibold cursor-pointer mx-3 items-center justify-center flex mt-4 text-center max-w-65 sm:max-w-none flex-row gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-row items-center justify-center gap-2">
                  Sitio Oficial
                  <LinkTo className="size-5" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}