import MotionFade from "../common/MotionFade";
import { useLangStore } from "../../i18n";

export default function Experience() {
  const { t } = useLangStore();

  return (
    <section
      id="experience"
      className="
        py-28 
        bg-white text-black 
        dark:bg-[#0a0f1f] dark:text-white 
        transition-colors
      "
    >
      <MotionFade>

        {/* TITLE */}
        <h2
          className="
            text-4xl font-bold 
            mb-16 text-left 
            max-w-[60%] mx-auto tracking-wide
            text-black dark:text-white
          "
        >
          {t.experience.title}
        </h2>

        {/* CONTENT */}
        <div className="max-w-[60%] mx-auto space-y-16">

          {t.experience.list.map((exp: any, index: number) => (
            <div
              key={index}
              className="
                leading-relaxed 
                text-black/90 dark:text-white/90
              "
            >

              {/* ROLE */}
              <h3 className="text-3xl font-semibold mb-2 text-black dark:text-white">
                {exp.role}
              </h3>

              {/* COMPANY */}
              <p className="text-xl mb-1 text-black/70 dark:text-white/70">
                {exp.company}
              </p>

              {/* YEAR */}
              <p className="text-base mb-6 text-black/50 dark:text-white/50">
                {exp.year}
              </p>

              {/* DETAILS */}
              <ul className="list-disc pl-8 space-y-3 text-black/80 dark:text-white/80 text-lg">
                {exp.details.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </MotionFade>
    </section>
  );
}
