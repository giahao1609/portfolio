import MotionFade from "../common/MotionFade";
import { useLangStore } from "../../i18n";

export default function Projects() {
  const { t } = useLangStore();

  return (
    <section
      id="projects"
      className="
        py-28
        bg-white text-black
        dark:bg-[#0a0f1f] dark:text-white
        transition-colors duration-300
      "
    >
      <MotionFade>

        {/* TITLE */}
        <h2
          className="
            text-4xl font-bold text-center
            mb-16 tracking-wide
            text-black dark:text-white
          "
        >
          {t.projects.title}
        </h2>

        {/* GRID */}
        <div className="max-w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 px-6">

          {t.projects.list.map((p: any, i: number) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              className="
                group 
                block 
                p-6 rounded-2xl border 
                shadow-lg hover:shadow-xl 
                transition
                backdrop-blur-md

                /* LIGHT MODE CARD */
                bg-black/5 border-black/10
                hover:bg-black/10 hover:border-black/20
                text-black

                /* DARK MODE CARD */
                dark:bg-white/5 dark:border-white/10
                dark:hover:bg-white/10 dark:hover:border-white/20
                dark:text-white
              "
            >
              {/* IMAGE */}
              <div className="overflow-hidden mb-5 rounded-xl">
                <img
                  src={p.image}
                  className="
                    w-full h-52 object-cover 
                    group-hover:scale-105 
                    transition duration-500
                  "
                />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-3 leading-snug text-black dark:text-white">
                {p.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-black/70 dark:text-white/70 text-base leading-relaxed mb-5">
                {p.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3">
                {p.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-1.5 text-sm tracking-wide rounded-lg border transition

                      /* LIGHT */
                      bg-black/5 text-black/80 border-black/20
                      group-hover:bg-black/10 group-hover:border-black/30

                      /* DARK */
                      dark:bg-white/10 dark:text-white/80 dark:border-white/20
                      dark:group-hover:bg-white/20 dark:group-hover:border-white/40
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </a>
          ))}

        </div>

      </MotionFade>
    </section>
  );
}
