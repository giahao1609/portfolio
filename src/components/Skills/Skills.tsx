import MotionFade from "../common/MotionFade";
import { useLangStore } from "../../i18n";

export default function Skills() {
  const { t } = useLangStore();

  const categories = Object.keys(
    t.skills.categories
  ) as (keyof typeof t.skills.categories)[];

  return (
    <section
      id="skills"
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
            text-4xl font-bold text-center mb-16 tracking-wide
            text-black dark:text-white
          "
        >
          {t.skills.title}
        </h2>

        {/* GRID */}
        <div className="max-w-[60%] mx-auto grid md:grid-cols-3 gap-16 px-6">

          {categories.map((key) => (
            <div
              key={key}
              className="
                p-6 rounded-2xl transition backdrop-blur-md

                /* LIGHT */
                bg-black/5 border border-black/10
                hover:bg-black/10

                /* DARK */
                dark:bg-white/5 dark:border-white/10
                dark:hover:bg-white/10
              "
            >

              {/* CATEGORY TITLE */}
              <h3 className="text-2xl font-semibold mb-5 text-black dark:text-white">
                {t.skills.categories[key]}
              </h3>

              {/* SKILL TAGS */}
              <div className="flex flex-wrap gap-3">
                {t.skills.list[key].map((item: string) => (
                  <span
                    key={item}
                    className="
                      px-5 py-2 text-base rounded-lg tracking-wide transition

                      /* LIGHT */
                      bg-black/5 text-black/80 border border-black/20
                      hover:bg-black/10 hover:border-black/30

                      /* DARK */
                      dark:bg-white/10 dark:text-white/80 dark:border-white/20
                      dark:hover:bg-white/20 dark:hover:border-white/40
                    "
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
