import { fetchProjectData } from "@/libs/projects.api";
import type { Project } from "@/types/types.project";
import { TECHNOLOGIES } from "@/consts/technologies";
import ImageWithLoading from "@/components/ImageWithLoading";

export const revalidate = 86400;

export default async function ProjectsPage({
  limit,
  ShowBtnPage = false,
  Title = false,
}: { limit?: number; ShowBtnPage?: boolean; Title?: boolean } = {}) {
  const response = await fetchProjectData("/api/projects/?populate=*");
  const projects: Project[] = response?.data || [];
  const displayedProjects = limit ? projects.slice(0, limit) : projects;


  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

  return (
    <>
      <section
        className={
          Title === true
            ? "flex min-h-162.5 text-purple-100 flex-col gap-2 justify-center w-full items-center"
            : "flex min-h-162.5 text-purple-100 flex-col gap-2 justify-center w-full items-center mt-25"
        }
      >
        {Title === true ? (
          <h1 className="text-4xl font-bold text-center">
            Proyectos Destacados
          </h1>
        ) : (
          <h1 className="text-4xl font-bold text-center">
            {" "}
            Todos Mis Proyectos
          </h1>
        )}
        {displayedProjects.map((project, p) => {
          const image = project.shot?.url?.startsWith("http")
            ? project.shot.url
            : `${STRAPI_URL}${project.shot?.url}`;

          return (
            <article
              key={p}
              className="flex gap-2 rounded-2xl m-8 overflow-hidden lg:pr-0 lg:pl-0 flex-col-reverse xl:flex-row xl:w-6xl lg:max-w-6x1 xl:h-97 border-3 border-purple-400 justify-between items-center hover:border-purple-100 active:border-purple-100 transition duration-200 ease-out"
            >
              <div className="xl:max-w-lg w-full xl:w-auto flex flex-1 flex-col h-full px-4 py-3">
                <div className="flex h-full flex-col justify-around gap-2">
                  <h2 className="text-4xl font-bold">{project.title}</h2>
                  <div>
                    <p className="max-w-100 text-[1.2rem] font-semibold">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-3xl font-bold">Stacks</h2>
                    <div className="flex gap-2 h-6 w-fit items-center justify-center">
                      {project.technologies?.map((tech) => {
                        return Object.entries(tech)
                          .filter(
                            ([key, value]) =>
                              value !== null &&
                              ![
                                "id",
                                "documentId",
                                "createdAt",
                                "updatedAt",
                                "publishedAt",
                              ].includes(key),
                          )
                          .map(([key]) => {
                            const techName = key;
                            const ComponentToRender = TECHNOLOGIES[techName];
                            return (
                              <div key={`${tech.id}-${key}`} title={techName}>
                                {ComponentToRender ? (
                                  <ComponentToRender className="flex w-fit h-7" />
                                ) : (
                                  <span className="text-[10px] text-gray-400">
                                    {techName}
                                  </span>
                                )}
                              </div>
                            );
                          });
                      })}
                    </div>
                  </div>
                  <div className="flex lg:w-full lg:flex-row gap-5 font-semibold text-center items-center justify-center sm:justify-normal sm:items-normal">
                    <a
                      className="text-[17px] size-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93"
                      target="_blank"
                      href={project.preview_link}
                      rel="noopener noreferrer"
                    >
                      Ver Demo
                    </a>
                    <a
                      className="text-[17px] size-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93"
                      target="_blank"
                      href={project.code_link}
                      rel="noopener noreferrer"
                    >
                      Ver Codigo
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex lg:p-0 mask-clip-border relative">
                <ImageWithLoading
                  Rounded={true}
                  src={image}
                  className="max-h-96 h-auto object-contain aspect-video rounded-xl mask-clip-border"
                  alt={project.title}
                />
                <span>
                  {project.state === 3 ? (
                    <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Completado
                    </span>
                  ) : project.state === 2 ? (
                    <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                      En Progreso
                    </span>
                  ) : project.state === 1 ? (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Planeado
                    </span>
                  ) : project.state === 4 ? (
                    <span className="absolute top-2 right-2 bg-neutral-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Descontinuado
                    </span>
                  ) : null}
                </span>
              </div>
            </article>
          );
        })}
        {ShowBtnPage && (
          <a
            href="/projects"
            className="text-[20px] size-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93 font-semibold cursor-pointer mx-3 items-center justify-center flex mt-4 text-center max-w-65 sm:max-w-none"
          >
            Ver todos los Proyectos
          </a>
        )}
      </section>
    </>
  );
}
