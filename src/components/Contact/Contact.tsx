import MotionFade from "../common/MotionFade";
import { useLangStore } from "../../i18n";
import { Mail, Phone, Github, MapPin } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export default function Contact() {
  const { t } = useLangStore();

  return (
    <section
      id="contact"
      className="
        py-28 
        bg-white text-black
        dark:bg-[#0a0f1f] dark:text-white
        transition-colors duration-300
      "
    >
      <MotionFade>

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-4 text-center text-black dark:text-white">
          {t.contact.title}
        </h2>

        <p className="text-center mb-14 text-lg max-w-2xl mx-auto text-black/70 dark:text-white/70">
          {t.contact.desc}
        </p>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          {/* FORM */}
          <div
            className="
              p-8 rounded-2xl backdrop-blur-md transition

              /* LIGHT */
              bg-black/5 border border-black/10

              /* DARK */
              dark:bg-white/5 dark:border-white/10
            "
          >

            <form className="space-y-5">

              {/* FULL NAME */}
              <div>
                <label className="block mb-1 text-black/80 dark:text-white/80">
                  {t.contact.form.fullname}
                </label>
                <input
                  type="text"
                  className="
                    w-full px-4 py-3 rounded-lg outline-none transition

                    /* LIGHT */
                    bg-black/5 border border-black/20 text-black placeholder-black/50
                    focus:border-blue-500

                    /* DARK */
                    dark:bg-white/10 dark:border-white/20 dark:text-white dark:placeholder-white/50
                    dark:focus:border-blue-400
                  "
                  placeholder={t.contact.form.fullname_placeholder}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-1 text-black/80 dark:text-white/80">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  className="
                    w-full px-4 py-3 rounded-lg outline-none transition

                    /* LIGHT */
                    bg-black/5 border border-black/20 text-black placeholder-black/50
                    focus:border-blue-500

                    /* DARK */
                    dark:bg-white/10 dark:border-white/20 dark:text-white dark:placeholder-white/50
                    dark:focus:border-blue-400
                  "
                  placeholder={t.contact.form.email_placeholder}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-1 text-black/80 dark:text-white/80">
                  {t.contact.form.message}
                </label>
                <textarea
                  rows={5}
                  className="
                    w-full px-4 py-3 rounded-lg resize-none outline-none transition

                    /* LIGHT */
                    bg-black/5 border border-black/20 text-black placeholder-black/50
                    focus:border-blue-500

                    /* DARK */
                    dark:bg-white/10 dark:border-white/20 dark:text-white dark:placeholder-white/50
                    dark:focus:border-blue-400
                  "
                  placeholder={t.contact.form.message_placeholder}
                ></textarea>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="
                  px-6 py-3 rounded-xl font-semibold transition w-full md:w-auto

                  /* LIGHT */
                  bg-blue-600 hover:bg-blue-700 text-white

                  /* DARK */
                  dark:bg-blue-600 dark:hover:bg-blue-700
                "
              >
                {t.contact.form.submit}
              </button>
            </form>

          </div>

          {/* CONTACT INFO */}
          <div
            className="
              p-8 rounded-2xl backdrop-blur-md space-y-6 transition

              /* LIGHT */
              bg-black/5 border border-black/10

              /* DARK */
              dark:bg-white/5 dark:border-white/10
            "
          >

            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
              {t.contact.info_title}
            </h3>

            <div className="flex items-center gap-3 text-black/80 dark:text-white/80">
              <Mail size={20} className="text-pink-500 dark:text-pink-400" />
              <span>hoanggiahao38@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-black/80 dark:text-white/80">
              <Phone size={20} className="text-pink-500 dark:text-pink-400" />
              <span>0862508033</span>
            </div>

            <a
              href="https://github.com/giahao1609"
              target="_blank"
              className="
                flex items-center gap-3 transition

                /* LIGHT */
                text-black/80 hover:text-black

                /* DARK */
                dark:text-white/80 dark:hover:text-white
              "
            >
              <Github size={20} className="text-pink-500 dark:text-pink-400" />
              github.com/giahao1609
            </a>

            <a
              href="https://facebook.com/huyen.meo.98284"
              target="_blank"
              className="
                flex items-center gap-3 transition

                /* LIGHT */
                text-black/80 hover:text-black

                /* DARK */
                dark:text-white/80 dark:hover:text-white
              "
            >
              <FaFacebook size={20} className="text-pink-500 dark:text-pink-400" />
              Facebook cá nhân
            </a>

            <div className="flex items-center gap-3 text-black/80 dark:text-white/80">
              <MapPin size={20} className="text-pink-500 dark:text-pink-400" />
              <span>{t.contact.location}</span>
            </div>

          </div>

        </div>

      </MotionFade>
    </section>
  );
}
