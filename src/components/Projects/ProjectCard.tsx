import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  image: string;
}

export default function ProjectCard({
  title,
  desc,
  tech,
  link,
  image,
}: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      className="
        block rounded-2xl overflow-hidden shadow-lg transition-all

        /* LIGHT */
        bg-white border border-gray-200 text-black
        hover:shadow-xl

        /* DARK */
        dark:bg-[#111827] dark:text-white dark:border-white/10
        dark:hover:border-white/20
      "
    >
      {/* IMAGE */}
      <img
        src={import.meta.env.BASE_URL + image}
        alt={title}
        className="
          w-full aspect-video object-cover 
          rounded-t-2xl
          transition-transform duration-500
          hover:scale-[1.02]
        "
      />

      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-2 text-sm leading-relaxed 
                     text-gray-600 dark:text-gray-300">
          {desc}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="
                px-3 py-1 text-xs rounded-lg transition

                /* LIGHT */
                bg-gray-200 text-gray-700

                /* DARK */
                dark:bg-white/10 dark:text-white/80
                dark:border dark:border-white/10
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
