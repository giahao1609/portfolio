import MotionFade from "../common/MotionFade";
import { useLangStore } from "../../i18n";

export default function Projects() {
  const { t } = useLangStore();

  return (
    <section id="projects" className="py-28">
      <MotionFade>

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-white mb-16 tracking-wide">
          {t.projects.title}
        </h2>

        {/* GRID */}
        <div className="max-w-[60%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-14 px-6">

          {t.projects.list.map((p: any, i: number) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              className="group bg-white/5 hover:bg-white/10 transition p-6 block"
            >
              {/* IMAGE */}
              <div className="overflow-hidden mb-5">
                <img
                  src={p.image}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold text-white mb-3 leading-snug">
                {p.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-white/70 text-base leading-relaxed mb-5">
                {p.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3">
                {p.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 text-sm bg-white/10 text-white/80 tracking-wide
                               group-hover:bg-white/20 transition"
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
