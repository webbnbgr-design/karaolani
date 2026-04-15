
import { useLanguage } from '@/src/lib/LanguageContext';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Γιώργος Π.',
      text: 'Άψογη συνεργασία και απόλυτη εχεμύθεια. Η κ. Καραολάνη μας βοήθησε σε μια δύσκολη αγοραπωλησία ακινήτου με επαγγελματισμό.',
      role: 'Επιχειρηματίας'
    },
    {
      name: 'Μαρία Σ.',
      text: 'Εμπιστοσύνη από την πρώτη στιγμή. Πολύ σημαντικό να έχεις έναν δικηγόρο που σε ακούει και σε καθοδηγεί σωστά.',
      role: 'Ιδιωτική Υπάλληλος'
    },
    {
      name: 'Νίκος Κ.',
      text: 'Εξαιρετική γνώση του αντικειμένου και συνέπεια. Τη συστήνω ανεπιφύλακτα.',
      role: 'Ελεύθερος Επαγγελματίας'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-aegean mb-4"
          >
            {t.testimonials.title}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-aegean mx-auto rounded-full"
          />
        </div>

        <div className="px-12">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-none bg-soft-white/50 rounded-3xl p-8 md:p-12">
                    <CardContent className="flex flex-col items-center text-center p-0">
                      <Quote className="w-12 h-12 text-aegean/20 mb-8" />
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-aegean text-aegean" />
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl font-serif italic text-aegean mb-8 leading-relaxed text-balance">
                        "{testimonial.text}"
                      </p>
                      <div className="font-serif text-lg font-bold text-aegean">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-warm-grey uppercase tracking-widest">
                        {testimonial.role}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-aegean/10 text-aegean hover:bg-aegean hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 border-aegean/10 text-aegean hover:bg-aegean hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
