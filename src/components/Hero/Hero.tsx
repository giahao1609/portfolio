import MotionFade from "../common/MotionFade";
import { useLangStore } from "../../i18n";

export default function Hero() {
  const { t } = useLangStore();

  return (
    <section
      id="home"
      className="
        py-36 px-6 md:px-16
        text-black bg-white
        dark:text-white 
        dark:bg-linear-to-br 
        dark:from-[#071123] 
        dark:via-[#0b1b33] 
        dark:to-[#081423]
        transition-colors duration-300
      "
    >
      <div
        className="
          max-w-6xl mx-auto 
          grid grid-cols-1 md:grid-cols-2 
          gap-20 items-center
        "
      >
      
        {/* LEFT */}
        <MotionFade>
          <div>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-black dark:text-white">
              {t.hero.name}
            </h1>

            <h2 className="text-2xl md:text-3xl mt-4 mb-7 text-blue-600 dark:text-blue-300">
              {t.hero.title}
            </h2>

            <p className="text-black/80 dark:text-white/80 text-xl leading-relaxed mb-6">
              {t.hero.shortDescription}
            </p>

            <p className="text-black/70 dark:text-white/70 text-lg leading-relaxed mb-12">
              {t.hero.description}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-6">
              <a
                href={import.meta.env.BASE_URL + "cv.pdf"}
                className="
                  px-7 py-3.5 rounded-xl text-lg
                  bg-black/10 hover:bg-black/20 text-black
                  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
                  transition
                "
              >
                {t.hero.downloadCV}
              </a>

              <a
                href="#projects"
                className="
                  px-7 py-3.5 rounded-xl text-lg
                  bg-black/5 hover:bg-black/10 text-black
                  dark:bg-white/5 dark:hover:bg-white/10 dark:text-white
                  transition
                "
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
              {/* Glow chỉ xuất hiện ở Dark Mode */}
              <div className="
                absolute -inset-10 
                hidden dark:block 
                bg-purple-600/30 
                blur-[100px] 
                rounded-3xl
              "></div>

              <img
                src={import.meta.env.BASE_URL + "profile.jpg"}
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
