
import { useLanguage } from '@/src/lib/LanguageContext';
import { motion } from 'motion/react';
import { Home, Users, Gavel, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.realEstate.title,
      desc: t.services.realEstate.desc,
      icon: Home,
    },
    {
      title: t.services.familyLaw.title,
      desc: t.services.familyLaw.desc,
      icon: Users,
    },
    {
      title: t.services.debtCollection.title,
      desc: t.services.debtCollection.desc,
      icon: FileText,
    },
    {
      title: t.services.litigation.title,
      desc: t.services.litigation.desc,
      icon: Gavel,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-aegean mb-4"
          >
            {t.services.title}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-aegean mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-none bg-soft-white hover:bg-aegean/5 transition-colors group cursor-default">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-aegean group-hover:text-white transition-all duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-serif text-aegean">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-grey font-light leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
