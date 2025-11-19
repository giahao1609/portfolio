import MotionFade from "../common/MotionFade";
import { useLangStore } from "../../i18n";
import { Mail, Phone, Github, MapPin } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export default function Contact() {
  const { t } = useLangStore();

  return (
    <section id="contact" className="py-28">
      <MotionFade>

        {/* TIÊU ĐỀ */}
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          {t.contact.title}
        </h2>

        <p className="text-center text-white/70 mb-14 text-lg max-w-2xl mx-auto">
          {t.contact.desc}
        </p>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          {/* FORM */}
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-md border border-white/10">

            <form className="space-y-5">
              {/* FULL NAME */}
              <div>
                <label className="block text-white/80 mb-1">
                  {t.contact.form.fullname}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 
                             rounded-lg text-white focus:border-blue-400 outline-none"
                  placeholder={t.contact.form.fullname_placeholder}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-white/80 mb-1">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 
                             rounded-lg text-white focus:border-blue-400 outline-none"
                  placeholder={t.contact.form.email_placeholder}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-white/80 mb-1">
                  {t.contact.form.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 
                             rounded-lg text-white focus:border-blue-400 outline-none resize-none"
                  placeholder={t.contact.form.message_placeholder}
                ></textarea>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl 
                           text-white font-semibold w-full md:w-auto"
              >
                {t.contact.form.submit}
              </button>
            </form>

          </div>

          {/* CONTACT INFO */}
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-md border border-white/10 space-y-6">

            <h3 className="text-xl font-semibold text-white mb-4">
              {t.contact.info_title}
            </h3>

            <div className="flex items-center gap-3 text-white/80">
              <Mail size={20} className="text-pink-400" />
              <span>hoanggiahao38@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <Phone size={20} className="text-pink-400" />
              <span>0862508033</span>
            </div>

            <a
              href="https://github.com/giahao1609"
              target="_blank"
              className="flex items-center gap-3 text-white/80 hover:text-white transition"
            >
              <Github size={20} className="text-pink-400" />
              github.com/giahao1609
            </a>

            <a
              href="https://facebook.com/huyen.meo.98284"
              target="_blank"
              className="flex items-center gap-3 text-white/80 hover:text-white transition"
            >
              <FaFacebook size={20} className="text-pink-400" />
              Facebook cá nhân
            </a>

            <div className="flex items-center gap-3 text-white/80">
              <MapPin size={20} className="text-pink-400" />
              <span>{t.contact.location}</span>
            </div>

          </div>

        </div>

      </MotionFade>
    </section>
  );
}
