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
      className="block rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-900 border dark:border-gray-700 transition"
    >
      {/* ẢNH NHỎ LẠI — TỈ LỆ 16:9 */}
      <img
        src={image}
        alt={title}
        className="w-full aspect-video object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
