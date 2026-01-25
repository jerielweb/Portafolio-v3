import { fetchProjectData, BASE_URL } from "@/libs/projects.api";
import type { Project } from "@/types/types.project";
import { TECHNOLOGIES } from "@/consts/technologies";

export default async function ProjectsPage() {
  const response = await fetchProjectData("/api/projects/?populate=*");
  const projects: Project[] = response?.data || [];

  console.log(projects);

  return (
    <>
      <section className="flex min-h-162.5 text-purple-100 flex-col gap-2 justify-center w-full items-center">
        {projects.map((project, p) => {
          const image = `${BASE_URL}${project.shot.url}`;

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
                      {project.technologies.map((tech) => {
                        return Object.entries(tech)
                          .filter(([key, value]) =>
                              value !== null &&
                              !["id","documentId", "createdAt", "updatedAt", "publishedAt",].includes(key),
                          ).map(([key]) => {
                            const techName = key
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
                <img
                  src={image}
                  className="max-h-96 h-auto object-contain aspect-video rounded-xl mask-clip-border"
                  loading="lazy"
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
                  ) : null}
                </span>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
