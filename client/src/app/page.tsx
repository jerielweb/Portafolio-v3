import { getHeroSections } from "@/libs/hero.api";
import { GitHub, Linkedin } from "@/components/icons";
import Skils from "@/components/skilsList";
import EducationsList from "@/components/educationsList";
import ProjectsPage from "@/app/projects/page";
import Contact from "@/components/contact";
import Image from "@/components/ImageWithLoading";
// ISR: Revalidar cada 12 horas (43200 segundos)
export const revalidate = 43200;

export default async function Home() {
  const heroData = await getHeroSections();
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

  if (!heroData) return null;

  const {
    header,
    title,
    sub_title,
    curriculum,
    is_working,
    About,
    Image: heroImage,
  } = heroData;

  const profileImageUrl = heroImage?.[0]?.profile?.url
    ? heroImage[0].profile.url.startsWith("http")
      ? heroImage[0].profile.url
      : `${STRAPI_URL}${heroImage[0].profile.url}`
    : "/placeholder.png";

  return (
    <>
      <section className="flex flex-col size-full pt-20 h-screen justify-center items-center gap-15 lg:flex-row text-balance max-h-300">
        <div>
          <Image
            src={profileImageUrl}
            className="sm:size-80 size-60 rounded-full object-cover"
            alt="Foto De Perfil"
            width={500}
            height={500}
          />
        </div>
        <div>
          <div className="flex flex-col w-full items-center text-center lg:items-start">
            <span
              className={`text-purple-50 text-center font-medium border border-purple-300 size-fit px-2 rounded-full bg-linear-to-bl sm:m-0 mb-2 ${
                is_working
                  ? "from-violet-400 via-violet-600 to-indigo-900"
                  : "from-gray-400 via-gray-600 to-gray-900"
              }`}
            >
              {is_working
                ? "ACTUALMENTE TRABAJANDO"
                : "EN BUSCA DE OPORTUNIDADES"}
            </span>
            <div>
              <span className="lg:text-3xl text-2xl text-purple-50 font-bold">
                {header}
              </span>
            </div>
            <h1 className="font-black text-purple-50 text-4xl mx-3">{title}</h1>
            <h2 className="text-purple-50 font-bold lg:text-2xl mx-2">
              {sub_title}
            </h2>
          </div>
          <div className="flex text-purple-50 gap-3 mt-2 text-center font-bold items-center justify-center lg:justify-normal lg:text-start">
            <a
              className="px-3 py-1 lg:px-6 lg:py-3 bg-violet-400 rounded-full flex items-center gap-2 transition hover:scale-105"
              href={curriculum}
              target="_blank"
              rel="noopener noreferrer"
            >
              VER CV
            </a>
            <a
              className="px-3 py-1 lg:px-6 lg:py-3 bg-violet-600 rounded-full flex items-center gap-2 transition hover:scale-105"
              href="#about"
            >
              SABER MÁS
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="px-5 flex flex-col size-full justify-center items-center gap-10 my-20"
      >
        <div className="flex flex-col size-full justify-center rounded-2xl overflow-hidden border-3 items-center border-purple-400 hover:border-purple-100 transition duration-200 text-purple-50 max-w-2xl p-5 gap-5">
          <h2 className="text-center font-extrabold sm:text-5xl text-4xl">
            {About?.[0]?.T_About}
          </h2>
          <p className="flex flex-col gap-2 font-semibold text-xl">
            {About?.[0]?.text}
          </p>
          <div className="flex gap-3 mt-3">
            {About?.[0]?.linkdedin && (
              <a
                href={About[0].linkdedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-purple-600 text-purple-100 font-bold rounded-3xl p-3 hover:shadow-purple-100 transition duration-200"
              >
                <Linkedin className="size-5" />
                LinkedIn
              </a>
            )}
            {About?.[0]?.git_hub && (
              <a
                href={About[0].git_hub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-purple-600 text-purple-100 font-bold rounded-3xl p-3 hover:shadow-purple-100 transition duration-200"
              >
                <GitHub className="size-5" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </section>
      <ProjectsPage Title={true} ShowBtnPage={true} limit={3} />
      <Skils />
      <EducationsList />
      <Contact />
    </>
  );
}
