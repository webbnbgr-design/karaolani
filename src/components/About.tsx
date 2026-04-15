
import { useLanguage } from '@/src/lib/LanguageContext';
import { motion } from 'motion/react';
import { ShieldCheck, Award, MapPin } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      title: t.about.trust,
      desc: t.about.trustDesc,
      icon: ShieldCheck,
    },
    {
      title: t.about.experience,
      desc: t.about.experienceDesc,
      icon: Award,
    },
    {
      title: t.about.proximity,
      desc: t.about.proximityDesc,
      icon: MapPin,
    },
  ];

  return (
    <section id="about" className="py-24 bg-soft-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/law-books-library/1000/1000"
                alt="Legal Library"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-aegean/20" />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-aegean/10 rounded-full blur-2xl" />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-aegean mb-12"
            >
              {t.about.title}
            </motion.h2>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aegean/10 flex items-center justify-center text-aegean">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-aegean mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-warm-grey font-light leading-relaxed max-w-md">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
