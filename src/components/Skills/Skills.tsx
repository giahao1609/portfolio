import MotionFade from "../common/MotionFade";
import { useLangStore } from "../../i18n";

export default function Skills() {
  const { t } = useLangStore();

  const categories = Object.keys(
    t.skills.categories
  ) as (keyof typeof t.skills.categories)[];

  return (
    <section id="skills" className="py-28">
      <MotionFade>

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-wide">
          {t.skills.title}
        </h2>

        {/* GRID */}
        <div className="max-w-[60%] mx-auto grid md:grid-cols-3 gap-16 px-6">

          {categories.map((key) => (
            <div
              key={key}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 
                         backdrop-blur-md hover:bg-white/10 transition"
            >

              {/* CATEGORY TITLE */}
              <h3 className="text-2xl font-semibold text-white mb-5">
                {t.skills.categories[key]}
              </h3>

              {/* SKILL TAGS */}
              <div className="flex flex-wrap gap-3">
                {t.skills.list[key].map((item: string) => (
                  <span
                    key={item}
                    className="px-5 py-2 text-base bg-white/10 text-white/80 
                               rounded-lg border border-white/20
                               hover:bg-white/20 transition tracking-wide"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </MotionFade>
    </section>
  );
}
