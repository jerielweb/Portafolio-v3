import { getHeroSections, BASE_URL } from "@/libs/hero.api";


export default async function Home() {
  const heroData = await getHeroSections();
  const { header, title, sub_title, curriculum, is_working } = heroData;

const profileImageUrl = heroData.Image?.[0]?.profile?.url?.startsWith('http')
  ? heroData.Image[0].profile.url
  : `${BASE_URL}${heroData.Image[0].profile.url}`;

  return (
    <>
      <section className="flex flex-col size-full pt-20 h-screen justify-center items-center gap-5 lg:flex-row text-balance max-h-300">
        <div>
          <img src={profileImageUrl} className=" sm:size-80 size-60 rounded-full" alt="Foto De Perfil" width={1080} height={1080} />
        </div>
        <div>
          <div className="flex flex-col w-full items-center text-center lg:items-start">
            {is_working ?
            (
              <span className="text-purple-50 text-center font-medium border border-purple-300 size-fit px-2 rounded-full bg-linear-to-bl from-violet-400 via-violet-600 to-indigo-900 sm:m-0 mb-2">
                ACTUALMENTE TRABAJANDO
              </span>
            ) : (
              <span className="text-purple-50 text-center font-medium border border-purple-300 size-fit px-2 rounded-full bg-linear-to-bl from-violet-400 via-violet-600 to-indigo-900 sm:m-0 mb-2">
                EN BUSCA DE OPORTUNIDADES
              </span>
            )}
            <div>
              <span className="lg:text-3xl text-2xl text-purple-50 font-bold">
                {header}
              </span>
            </div>
            <h1 className="font-black text-purple-50 text-4xl mx-3">{title}</h1>
            <h3 className="text-purple-50 font-bold lg:text-2xl mx-2">
              {sub_title}
            </h3>
          </div>
          <div className="flex text-purple-50 gap-3 mt-2 text-center font-bold items-center justify-center lg:justify-normal lg:text-start">
            <a
              className="px-3 py-1 lg:px-6 lg:py-3 bg-violet-400 rounded-full flex items-center gap-2"
              href={curriculum}
              target="_blank"
            >
              VER CV
            </a>
            <a
              className="px-3 py-1 lg:px-6 lg:py-3 bg-violet-600 rounded-full flex items-center gap-2"
              href="#about"
            >
              SABER MAS
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
