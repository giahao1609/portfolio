import MotionFade from "../common/MotionFade";
import { useLangStore } from "../../i18n";

export default function Hero() {
  const { t } = useLangStore();

  return (
    <section
      id="home"
      className="py-36 px-6 md:px-16 bg-linear-to-br from-[#071123] via-[#0b1b33] to-[#081423] text-white"
    >
      <div className="
        max-w-6xl 
        mx-auto 
        grid grid-cols-1 md:grid-cols-2 
        gap-20 
        items-center
      ">

        {/* LEFT */}
        <MotionFade>
          <div>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
              {t.hero.name}
            </h1>

            <h2 className="text-2xl md:text-3xl text-blue-300 mt-4 mb-7">
              {t.hero.title}
            </h2>

            <p className="text-white/80 text-xl leading-relaxed mb-6">
              {t.hero.shortDescription}
            </p>

            {/* DESCRIPTION LONG */}
            <p className="text-white/70 text-lg leading-relaxed mb-12">
              {t.hero.description}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-6">
              <a
                href="/cv.pdf"
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 rounded-xl transition text-white text-lg"
              >
                {t.hero.downloadCV}
              </a>

              <a
                href="#projects"
                className="px-7 py-3.5 bg-white/5 hover:bg-white/10 rounded-xl transition text-white text-lg"
              >
                {t.hero.viewProjects}
              </a>
            </div>
          </div>
        </MotionFade>

        {/* RIGHT IMAGE */}
        <MotionFade>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-purple-600/30 blur-[100px] rounded-3xl"></div>

              <img
                src="./profile.jpg"
                className="
                  relative 
                  w-[260px] h-[340px]
                  md:w-[300px] md:h-[400px]
                  object-cover rounded-3xl shadow-2xl
                "
                alt="profile"
              />
            </div>
          </div>
        </MotionFade>

      </div>
    </section>
  );
}
