
import { useLanguage } from '@/src/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-soft-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-aegean/5 -skew-x-12 transform translate-x-1/4 z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-aegean/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aegean/10 text-aegean text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-aegean animate-pulse" />
              {t.hero.subtitle}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-aegean leading-[1.1] mb-8 text-balance">
              {t.hero.title}
            </h1>
            <p className="text-lg text-warm-grey font-light leading-relaxed mb-10 max-w-lg">
              {t.about.trustDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-aegean hover:bg-aegean-light text-white rounded-full px-8 py-7 text-lg group">
                <a href="#contact">
                  {t.hero.cta}
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-aegean/20 text-aegean hover:bg-aegean/5 rounded-full px-8 py-7 text-lg">
                <a href="#services">
                  {t.nav.services}
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/law-scales-justice/800/1000"
                alt="Law and Justice"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-aegean/10 mix-blend-multiply" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-aegean/10 max-w-[200px]"
            >
              <div className="text-3xl font-serif text-aegean font-bold mb-1">20+</div>
              <div className="text-xs text-warm-grey uppercase tracking-wider font-semibold">
                {t.about.experience}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
