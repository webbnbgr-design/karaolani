
import { useLanguage } from '@/src/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-aegean text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl font-bold tracking-tight">
              ΜΑΡΙΑ ΚΑΡΑΟΛΑΝΗ
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/60">
              ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/80">
            <a href="#" className="hover:text-white transition-colors">{t.nav.home}</a>
            <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </div>

          <div className="text-sm text-white/40">
            {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
