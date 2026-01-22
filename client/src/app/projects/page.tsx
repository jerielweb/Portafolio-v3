import { fetchProjectData, BASE_URL } from "@/libs/projects.api";
import type { project } from "@/types/types.project";

export default async function ProjectsPage() {
  const response = await fetchProjectData("/api/projects/?populate=*");
  const projects: project[] = response?.data || [];

  console.log(projects);

  return (
    <>
      <section className="flex min-h-162.5 text-purple-100 flex-col gap-2 justify-center w-full items-center">
        {projects.map((project, p) => {
          const image = `${BASE_URL}${project.shot.url}`;

          return (
            <article
              key={p}
              className="flex gap-2 rounded-2xl m-8 overflow-hidden lg:pr-0 lg:pl-0 flex-col-reverse xl:flex-row lg:max-w-6xl xl:h-96 border-3 border-purple-400 justify-between items-center hover:border-purple-100 active:border-purple-100 transition duration-200 ease-out"
            >
              <div className="xl:max-w-lg w-full xl:w-auto flex flex-1 flex-col h-full px-5 py-3">
                <div className="flex h-full flex-col justify-evenly gap-2">
                  <h2 className="text-4xl font-bold">{project.title}</h2>
                  <div>
                    <p className="max-w-100 text-[1.3rem] font-semibold">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Stacks</h2>
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
