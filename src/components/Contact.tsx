
import { useLanguage } from '@/src/lib/LanguageContext';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const locations = [
    {
      title: t.contact.rhodes,
      address: 'Πόλη Ρόδου, 85100',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51163.67499424887!2d28.188434!3d36.434079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1490396001859607%3A0x400bd2c3683f360!2sRhodes!5e0!3m2!1sen!2sgr!4v1713192000000!5m2!1sen!2sgr',
    },
    {
      title: t.contact.archangelos,
      address: 'Αρχάγγελος, Ρόδος, 85102',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12818.123456789!2d28.114!3d36.214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149023456789abcd%3A0x1234567890abcdef!2sArchangelos!5e0!3m2!1sen!2sgr!4v1713192000000!5m2!1sen!2sgr',
    }
  ];

  return (
    <section id="contact" className="py-24 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-aegean mb-4"
          >
            {t.contact.title}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-aegean mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-aegean/10 flex items-center justify-center text-aegean flex-shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-warm-grey font-bold mb-2">{t.contact.phone}</p>
                  <a href="tel:+302241132003" className="text-3xl font-serif text-aegean hover:text-aegean-light transition-colors">22411 32003</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-aegean/10 flex items-center justify-center text-aegean flex-shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-warm-grey font-bold mb-2">{t.contact.email}</p>
                  <a href="mailto:m.karaolani@gmail.com" className="text-3xl font-serif text-aegean hover:text-aegean-light transition-colors break-all">m.karaolani@gmail.com</a>
                </div>
              </div>

              <div className="p-8 bg-aegean/5 rounded-3xl border border-aegean/10">
                <p className="text-aegean font-serif text-xl italic leading-relaxed">
                  "Η εχεμύθεια και η προσωπική επαφή είναι η προτεραιότητά μας. Είμαστε στη διάθεσή σας για οποιαδήποτε νομική συμβουλή."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {locations.map((loc) => (
              <div key={loc.title} className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-aegean" />
                  <h4 className="text-xl font-serif text-aegean">{loc.title}</h4>
                </div>
                <div className="aspect-video rounded-3xl overflow-hidden border border-aegean/10 shadow-sm">
                  <iframe
                    src={loc.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-sm text-warm-grey">{loc.address}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
