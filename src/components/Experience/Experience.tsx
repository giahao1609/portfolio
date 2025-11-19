import MotionFade from "../common/MotionFade";
import { useLangStore } from "../../i18n";

export default function Experience() {
  const { t } = useLangStore();

  return (
    <section id="experience" className="py-28">
      <MotionFade>

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-white mb-16 text-left max-w-[60%] mx-auto tracking-wide">
          {t.experience.title}
        </h2>

        {/* CONTENT */}
        <div className="max-w-[60%] mx-auto space-y-16">

          {t.experience.list.map((exp: any, index: number) => (
            <div key={index} className="text-white/90 leading-relaxed">

              {/* ROLE */}
              <h3 className="text-3xl font-semibold text-white mb-2">
                {exp.role}
              </h3>

              {/* COMPANY */}
              <p className="text-xl text-white/70 mb-1">
                {exp.company}
              </p>

              {/* YEAR */}
              <p className="text-base text-white/50 mb-6">
                {exp.year}
              </p>

              {/* DETAILS */}
              <ul className="list-disc pl-8 space-y-3 text-white/80 text-lg">
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
